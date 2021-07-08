import axios from "axios";
import * as fs from "fs";

const request = axios.create({
  timeout: 5000
})

const savedFilePath: string = './books';
fs.mkdir(savedFilePath, err => {
  console.log(err);
});

enum api {
  books = "https://novel.juhe.im/books",
  bookDetail = "https://novel.juhe.im/book/",
  chapterDetail = "https://novel.juhe.im/book/"
}

class Book {
  _id: string;
  title: string;
  author: string;
  shortIntro: string;
  cover: string;
  cat: string;
  followerCount: string;
  zt: string;
  updated: string;
  lastChapter: string;
}

class BookDetail {
  _id: string;
  title: string;
  author: string;
  shortIntro: string;
  cover: string;
  cat: string;
  followerCount: string;
  zt: string;
  updated: string;
  lastChapter: string;
  wordCount: string;
  retentionRatio: string;
  chapters: ChapterDetail[]
}

class ChapterDetail {
  cid: string;
  wordCount: string;
  title: string;
}

async function getBooks() {
  try {
    const res = await request.get(api.books, {});
    const books: Book[] = res.data.books;
    for (const book of books) {
      await getBookDetail(book);
    }
    return res;
  } catch (error) {
    console.log(error)
  }
}

async function getBookDetail(book: Book) {
  try {
    const res = await request.get(api.bookDetail + book._id);
    const bookDetail: BookDetail = res.data;
    const bookId = bookDetail._id;
    const title = bookDetail.title;
    const chapters = bookDetail.chapters;
    const savePath = savedFilePath + title;
    fs.mkdirSync(savePath, 0o777);
    console.log("\t创建目录：" + savePath);
    fs.writeFileSync(savePath + '/' + title + '.json', JSON.stringify(bookDetail));
    for (const chapter of chapters) {
      await getChapterDetail(title, bookId, chapter.cid);
    }
    return res;
  } catch (error) {
    console.log("getBooDetail error", book, error);
  }
}

async function getChapterDetail(bookTitle: string, bookId: string, chapterId: string) {
  try {
    const res = await request.get(api.chapterDetail + bookId + '/' + chapterId);
    const chapterDetail: ChapterDetail = res.data;
    let csavePath = savedFilePath + bookTitle + "/" + chapterDetail.title + chapterId;
    csavePath = csavePath.replace(' ', '');
    fs.mkdirSync(csavePath, 0o777);
    console.log('\t\t创建目录' + csavePath);
    let fileName = csavePath + "/" + chapterDetail.title + "_" + chapterId + ".json";
    fileName = fileName.replace(' ', '');
    fs.writeFileSync(fileName, JSON.stringify(chapterDetail));
    console.log("\t\t\t保存文件:" + fileName);
    return res;
  } catch (error) {
    console.log("getChapterDetail error", bookTitle, chapterId, error);
  }
}

let res = getBooks();
console.log(res);
