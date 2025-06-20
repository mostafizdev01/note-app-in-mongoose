# Library Management System

## Overview
এই প্রজেক্টে আমি একটি Library Management System API তৈরি করেছি **Express**, **TypeScript**, এবং **MongoDB (Mongoose)** ব্যবহার করে।  
প্রজেক্টের মূল লক্ষ্য ছিল বইয়ের ডেটা ম্যানেজমেন্ট, ধার নেওয়া, এবং প্রয়োজনীয় বিভিন্ন ফিচার যেমন ফিল্টারিং, সোর্টিং ইত্যাদি ইমপ্লিমেন্ট করা।

---

## Features & Implementation

### ১. Book Model ও Validation  
- `title`, `author`, `genre`, `isbn`, `description`, `copies`, ও `available` ফিল্ড সহ বইয়ের স্কিমা তৈরি করেছি।  
- `genre` এর জন্য Enum ব্যবহার করেছি যাতে শুধুমাত্র নির্দিষ্ট মানগুলো (FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY) গ্রহণ করা হয়।  
- `isbn` ইউনিক রাখতে বলেছি।  
- `copies` অবশ্যই ০ বা তার বেশি হতে হবে।  
- `available` ফিল্ডের ডিফল্ট মান true রাখা হয়েছে।

### ২. Borrow Model ও Business Logic  
- Borrow মডেলে `book` (ObjectId), `quantity`, ও `dueDate` ফিল্ড আছে।  
- ধার নেওয়ার সময় চেক করেছি বইয়ের পর্যাপ্ত কপি আছে কিনা।  
- ধার নেওয়ার পর `copies` কমিয়ে দিয়েছি, আর যদি ০ হয় তাহলে `available` false করে দিয়েছি।  
- এই লজিকগুলো Mongoose এর instance/static methods এবং middleware দিয়ে নিয়ন্ত্রণ করেছি।

### ৩. API Endpoints  
- **Create Book:** POST `/api/books`  
- **Get All Books:** GET `/api/books` (ফিল্টার, সোর্ট, লিমিট সাপোর্ট করে)  
- **Get Book By ID:** GET `/api/books/:bookId`  
- **Update Book:** PUT `/api/books/:bookId`  
- **Delete Book:** DELETE `/api/books/:bookId`  
- **Borrow Book:** POST `/api/borrow`  
- **Borrowed Books Summary:** GET `/api/borrow` (Aggregation pipeline দিয়ে সারাংশ প্রদান করে)

### ৪. Aggregation Pipeline  
- Borrow রেকর্ডগুলোকে `book` ফিল্ড দিয়ে গ্রুপ করেছি।  
- প্রতিটি বইয়ের মোট ধার নেওয়া কপি যোগ করেছি (totalQuantity)।  
- বইয়ের `title` ও `isbn` তথ্যসহ রেজাল্ট ফিরিয়েছি।  
- এটা লাইব্রেরির স্টক ও ধার ব্যবস্থাপনায় সাহায্য করে।

### ৫. Error Handling  
- প্রতিটি API তে সঠিক Validation ও Error Response দিয়েছি।  
- Error Response এর ফরম্যাট consistent রাখা হয়েছে।

---

## Technologies Used  
- Node.js  
- Express.js  
- TypeScript  
- MongoDB (Mongoose)  

---

## Challenges & Learnings  
- TypeScript দিয়ে স্কিমা ও মডেল তৈরির সময় টাইপ সেফটি বৃদ্ধি পেয়েছে।  
- Middleware ও Mongoose methods দিয়ে বিজনেস লজিক ইমপ্লিমেন্ট করেছি।  
- Aggregation pipeline নিয়ে ভালো ধারণা পেয়েছি।  
- Proper Validation ও Error Handling করা শিখেছি।

---

## How to Run  
- কোড ক্লোন করে `npm install` চালান।  
- `.env` ফাইলে MongoDB কানেকশন স্ট্রিং যুক্ত করুন।  
- `npm run dev` চালিয়ে লোকাল সার্ভার চালু করুন।  
- Postman বা অন্য API টুল দিয়ে API টেস্ট করুন।

---

## Conclusion  
এই প্রজেক্টে RESTful API তৈরির কাজ সম্পূর্ণ করেছি যেখানে ডেটার ইন্টিগ্রিটি ও বিজনেস রুল মেইনটেইন করা হয়েছে Mongoose ফিচার ব্যবহার করে।  
লাইব্রেরি ম্যানেজমেন্ট এর জন্য এটি একটি কার্যকর সমাধান।

---

**Thank you for checking out my project!**
