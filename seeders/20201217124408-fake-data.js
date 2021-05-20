
module.exports = {
  up: async (queryInterface) => {
    const usersList = [];

    
    usersList.push({
      profile_pic: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/52be3f928d96857470b67178ab2878fb.jpeg?x-expires=1621605600&x-signature=jHayn2pjezk0%2BHT%2BgEDDIC%2FzvOY%3D',
      password: 'qwerty',
      username: 'drifterjjlin',
      created_at: new Date(),
      updated_at: new Date(),
    });

    usersList.push({
      profile_pic: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/5abf05f46b753b10e5b8e46f8822099f.jpeg?x-expires=1621605600&x-signature=oTYP0MmNN%2BHDUZ2Cii4vyqwgECs%3D',
      password: 'qwerty',
      username: 'jevinkiong3',
      created_at: new Date(),
      updated_at: new Date(),
    });
    
    try {
      const result = await queryInterface.bulkInsert('users', usersList);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
