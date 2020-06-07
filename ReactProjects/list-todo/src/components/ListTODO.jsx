import React, { useEffect, useState } from 'react';
import { firebase } from '../firebase';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [todoName, setTodoName] = useState('');
    const [todoDescription, setTodoDescription] = useState('');
    const [todoPriority, setTodoPriority] = useState('none');
    const [editMode, setEditMode] = useState(false);
    const [docId, setDocId] = useState('');

    useEffect(() => {
        (async function () {
            const db = firebase.firestore();
            try {
                const data = await db.collection('todos').get();
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setTodos(arrayData);
            } catch (e) {
                console.log(e);
            }
        }());
    }, [])

    const addTodo = (event) => {
        event.preventDefault();
        if (!todoName.trim()) return;
        try {
            const objectData = {
                name: todoName,
                description: todoDescription,
                priority: todoPriority
            };
            const db = firebase.firestore();
            db.collection('todos').add(objectData).then((ref) => {
                db.collection('todos').doc(ref.id).update({ id: ref.id });
                setTodos([...todos, { id: ref.id, ...objectData }]);
            });
        } catch (e) {
            console.log(e);
        } finally {
            clearForm();
        }
    }

    const confirmDialogDelete = (documentId) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to delete this?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => deleteTodo(documentId)
                },
                {
                    label: 'No',
                    onClick: () => {}
                }
            ]
        });
    };

    const deleteTodo = (documentId) => {
        try {
            const db = firebase.firestore();
            db.collection('todos').doc(documentId).delete();
            const filterTodos = todos.filter((item) => item.id !== documentId)
            setTodos(filterTodos);
        } catch (e) {
            console.log(e);
        }
    }

    const preEdit = (docId) => {
        setDocId(docId);
        setEditMode(true);
        const objIndex = todos.findIndex((obj => obj.id === docId));
        const todoView = todos[objIndex];
        setTodoName(todoView.name);
        setTodoDescription(todoView.description);
        setTodoPriority(todoView.priority);
    }

    const editTodo = (event) => {
        event.preventDefault();
        const objectData = {
            name: todoName,
            description: todoDescription,
            priority: todoPriority
        };
        try {
            const db = firebase.firestore();
            db.collection('todos').doc(docId).update(objectData);
            const todosUpdated = [...todos];
            const objIndex = todosUpdated.findIndex((obj => obj.id === docId));
            todosUpdated[objIndex] = { id: docId, ...objectData };
            setTodos(todosUpdated);
        } catch (e) {
            console.log(e);
        } finally {
            clearForm();
            setEditMode(!editMode);
        }
    }

    const clearForm = () => {
        setTodoName('');
        setTodoDescription('');
        setTodoPriority('none');
    }

    return (
        <div className="container">
            <br />
            <form className="w-50 mx-auto">
                <div className="form-group">
                    <label>Task Name</label>
                    <input
                        className="form-control"
                        type='text'
                        placeholder='todo name'
                        value={todoName}
                        onChange={e => setTodoName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Task Priority</label>
                    <select value={todoPriority} onChange={e => setTodoPriority(e.target.value)} className="form-control">
                        <option value="none">None</option>
                        <option value="critical">Critical</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Task Description</label>
                    <textarea
                        className="form-control"
                        rows="3"
                        placeholder="todo description"
                        value={todoDescription}
                        onChange={e => setTodoDescription(e.target.value)}>
                    </textarea>
                </div>
                {
                    editMode ?
                        <button type='submit' className="btn btn-danger float-right" onClick={() => { clearForm(); setEditMode(false); }}>Cancel</button>
                        :
                        null
                }
                <button type='submit' className="btn btn-outline-primary float-right mr-2" onClick={editMode ? editTodo : addTodo}>{editMode ? 'Save changes' : 'Add'}</button>
            </form>
            <br />
            <br />
            <hr />
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">task</th>
                        <th scope="col">name</th>
                        <th scope="col">description</th>
                        <th scope="col">priority</th>
                        <th scope="col">options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{todo.name}</td>
                                <td>{todo.description !== '' ? todo.description : 'Description not found'}</td>
                                <td>{todo.priority}</td>
                                <td>
                                    <a href="#">
                                        <button className="btn-sm btn-light mr-2" onClick={() => preEdit(todo.id)}>
                                            <svg className="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
                                                <path fillRule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
                                            </svg>
                                        </button>
                                    </a>
                                    <button className="btn-sm btn-danger" onClick={() => confirmDialogDelete(todo.id)}>
                                        <svg className="bi bi-trash-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div >
    );
}

export default TodoList;
