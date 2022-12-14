import * as DETELEBooks from '../requests/DELETEBooks.request';
import * as GETBooks from '../requests/GETBooks.request';
import * as POSTBooks from '../requests/POSTBooks.request';

describe('DELETE Books', () => {
    it('Deletar um livro', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            DETELEBooks.deleteBook(resAllBooks.body[0].id).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(200);
            })
        })
    });
    it.only('Criar e excluir um livro', () => {
        POSTBooks.addBook().then((resAllBooks) =>{
            DETELEBooks.deleteBook(resAllBooks.body.id).should((resDeleteBook) =>{
            expect(resDeleteBook.status).to.eq(200)
            })
        })
    });
});