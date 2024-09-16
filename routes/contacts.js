import express from 'express';

const router = express.Router();


// Get all contacts
router.get('/all', (req, res) => {
    res.send('All contacts');
  });
  
// Get a contact by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Contact by id: ${id}`);
  });
  
  // Create a new contact
  router.post('/create', (req, res) => {
    const newContact = req.body; // Assuming the contact data is sent in the request body
    // Logic to add the new contact to the data source goes here
    res.send(`Contact created: ${JSON.stringify(newContact)}`);
  });
  
  // Update an existing contact
  router.put('/update', (req, res) => {
    const updatedContact = req.body; // Assuming the contact data to update is sent in the request body
    // Logic to update the contact in the data source goes here
    res.send(`Contact updated: ${JSON.stringify(updatedContact)}`);
  });
  
  // Delete a contact
  router.delete('/delete', (req, res) => {
    const { id } = req.body; // Assuming the contact ID to delete is sent in the request body
    // Logic to delete the contact from the data source goes here
    res.send(`Contact deleted with id: ${id}`);
  });
export default router;  
