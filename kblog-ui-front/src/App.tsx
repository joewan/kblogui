import { Component } from 'react';
import { Fragment } from "react/jsx-runtime";
import MyLayout from './components/MyLayout';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/admin/dashboard';
import ArticleList from './pages/admin/articles/list';
import ArticleCategories from './pages/admin/articles/categories';
import Users from './pages/admin/user';
import MedicineList from './pages/admin/medicines/list';
import MedicineCategories from './pages/admin/medicines/categories';
import BookCategories from './pages/admin/books/categories';
import BookList from './pages/admin/books/list';
import './App.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <MyLayout>
                    <Routes>
                        <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
                        <Route path='users' element={<Users></Users>}></Route>
                        <Route path='articles/list' element={<ArticleList></ArticleList>}></Route>
                        <Route path='artilces/categories' element={<ArticleCategories></ArticleCategories>}></Route>
                        <Route path='medicines/list' element={<MedicineList></MedicineList>}></Route>
                        <Route path='medicines/categories' element={<MedicineCategories></MedicineCategories>}></Route>
                        <Route path='books/list' element={<BookList></BookList>}></Route>
                        <Route path='books/categories' element={<BookCategories></BookCategories>}></Route>
                    </Routes>
                </MyLayout>
            </Fragment>
        );
    }
}

export default App;
