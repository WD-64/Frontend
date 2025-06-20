function StudentList() {
  const students = [
    { id: 1, name: 'Ciro', country: 'China' },
    { id: 2, name: 'Martha', country: 'Germany' },
    { id: 3, name: 'Cornelia', country: 'Germany' },
  ];

  return (
    <ul>
      {students.map((student) => {
        return (
          <li key={student.id}>
            {student.name} from {student.country}
          </li>
        );
      })}
    </ul>
  );

  // Have list items that say : 'Ciro from China'
}

export default StudentList;
