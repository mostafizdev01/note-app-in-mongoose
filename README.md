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
