import { render } from './../node_modules/lit-html/lit-html.js';
import { allStudentsTemplate } from './template/studentTemplates.js';

document.getElementById('searchBtn').addEventListener('click', onClickHandler);
let tableTbody = document.querySelector('.container tbody');

let students = [];

loadStudents();

async function loadStudents() {
   let studentsResponse = await fetch('http://localhost:3030/jsonstore/advanced/table');
   let studentsObj = await studentsResponse.json();
   
   students = Object.values(studentsObj).map(student => ({
      name: `${student.firstName} ${student.lastName}`,
      course: student.course,
      email: student.email
   }));

   render(allStudentsTemplate(students), tableTbody);
}

function onClickHandler() {
   let searchInput = document.getElementById('searchField');
   let searchText = searchInput.value.toLowerCase();

   if (!searchText) {return;}

   let allStudents = students.map(student => Object.assign({}, student));
   let matchedStudents = allStudents
      .filter(student => Object.values(student).some(val => {
         return val.toLowerCase().includes(searchText)
      }));
   matchedStudents.forEach(s => s.class = 'select');

   searchInput.value = '';
   render(allStudentsTemplate(allStudents), tableTbody);
}