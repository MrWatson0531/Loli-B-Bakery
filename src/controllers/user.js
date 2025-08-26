

controller.getUserById = ({ id, select }) => {
  let { ...user } = verifyUserHandler(id);

  if (select) {
    user = getObjectSubset(user, select);
  }

  return user;
};

controller.deleteUserById = ({ id }) => {
  const { ...user } = verifyUserHandler(id);

  user.isDeleted = true;
  user.deletedOn = new Date().toISOString();

  return user;
};

module.exports = router, controller;

controller.addNewUser = ({ ...data }) => {
  const {
    name = '',
    password = '',
  } = data;


function addUser {router.post('/add', (req, res) => {
   
  res.status(201).send(addNewUser({ ...req.body }));
});

// update user by id (PUT)
router.put('/:id', (req, res) => {
  const { id } = req.params;

  res.send(updateUserById({ id, ...req.body }));
});

// update user by id (PATCH)
router.patch('/:id', (req, res) => {
  const { id } = req.params;

  res.send(updateUserById({ id, ...req.body }));
});}

function deleteUser {router.delete('/:id', (req, res) => {
  res.send(deleteUserById({ ...req.params }));
});}

 const newUser = {
    id: frozenData.users.length + 1,
    name,
    password,
  };

  return newUser;

}