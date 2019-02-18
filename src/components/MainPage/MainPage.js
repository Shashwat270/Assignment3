import React, { Component } from 'react';
import './MainPage.css';
import AllBooks from '../BooksOfAAuthor/AllBooks';
import Header from '../Header/Header';
import Authorname from '../AuthorName/AuthorName';

import getData from '../../UtilityFunction/getData';

class MainPage extends Component {
    state = {
      bookData: {},
    }

    componentDidMount() {
      getData('http://localhost:8080/books').then(response => this.storeData(response));
    }

    storeData = responseObject => this.setState({ bookData: responseObject });

    render() {
      return (
        <div className="page-theme">
          <Header />
          <div className="content-width div-books" />
          <AllBooks books={this.state.bookData['J K Rowling']} />
          {/* <AllBooks books={booksByWriter[1]} /> */}
        </div>
      );
    }
}
export default MainPage;
