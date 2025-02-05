// Function to handle form submission
document.getElementById('patientForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;
    const medicalHistory = document.getElementById('medicalHistory').value;

    // Create a new row for the table
    const tableBody = document.getElementById('patientTableBody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${contact}</td>
        <td><button onclick="deletePatient(this)">Delete</button></td>
    `;

    tableBody.appendChild(row);

    // Reset the form
    document.getElementById('patientForm').reset();
});

// Function to delete a patient
function deletePatient(button) {
    const row = button.closest('tr');
    row.remove();
}
