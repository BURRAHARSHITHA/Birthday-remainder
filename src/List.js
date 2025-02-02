// List.js
import React from "react";

function getUpcomingBirthdays(birthdays, days = 30) {
  const today = new Date();
  return birthdays.filter((birthday) => {
    // Create a Date object using the birthday's date string.
    const bdayDate = new Date(birthday.date);
    // Set the birthday to occur in the current year.
    bdayDate.setFullYear(today.getFullYear());
    // If the birthday already passed this year, use next year.
    if (bdayDate < today) {
      bdayDate.setFullYear(today.getFullYear() + 1);
    }
    // Calculate the difference in milliseconds and convert to days.
    const diffTime = bdayDate - today;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays <= days;
  });
}

const List = ({ birthdays }) => {
  const upcomingBirthdays = getUpcomingBirthdays(birthdays);

  return (
    <div>
      <h3>UPCOMING BIRTHDAYS IN THE NEXT 30 DAYS</h3>
      {upcomingBirthdays.length === 0 ? (
        <p>No upcoming birthdays in the next 30 days.</p>
      ) : (
        <ul className = 'person'>
             <h4>{ (upcomingBirthdays.length === 1 ) ? ("1 Birthday in 30 days" ) :(`${upcomingBirthdays.length} Birthdays in 30 days`) } </h4>
          {upcomingBirthdays.map((birthday) => (
            <li key={birthday.id}>
             <h3>{birthday.name} - {birthday.date}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
