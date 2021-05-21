module.exports = {
  up: async (queryInterface) => {
    const usersList = [
      {
        profile_pic: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/52be3f928d96857470b67178ab2878fb.jpeg?x-expires=1621605600&x-signature=jHayn2pjezk0%2BHT%2BgEDDIC%2FzvOY%3D',
        password: 'qwerty',
        username: 'drifterjjlin',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        profile_pic: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/5abf05f46b753b10e5b8e46f8822099f.jpeg?x-expires=1621605600&x-signature=oTYP0MmNN%2BHDUZ2Cii4vyqwgECs%3D',
        password: 'qwerty',
        username: 'jevinkiong3',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        profile_pic: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/eb136c16cf3eb89bff14947775283bb2.jpeg?x-expires=1621641600&x-signature=Eqhs8A0%2FIfnfT09dsDWNz%2FSDfUU%3D',
        password: 'qwerty',
        username: 'vtkh2004',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        profile_pic: 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1da7f697fbf493e5dbbb6920d932a846~c5_720x720.jpeg?x-expires=1621641600&x-signature=E1VW14DGIoCTGuoH19oyaqCq8hM%3D',
        password: 'qwerty',
        username: '7_footskills',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    const videosList = [
      {
        url: 'https://www.tiktok.com/@7_footskills/video/6964393113762745606',
        description: 'when goat gets angry 😠',
        user_id: 4,
        music: 'original sound - Timmitio',
        comments: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://www.tiktok.com/@7_footskills/video/6964290354665245957',
        description: 'Goat 🐐✨ weak foot',
        user_id: 4,
        music: 'baby I like ur style - tanyasedits',
        comments: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://www.tiktok.com/@7_footskills/video/6961557685661732101',
        description: 'Goat 🐐✨',
        user_id: 4,
        music: 'original sound - Football Tekkers',
        comments: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://www.tiktok.com/@7_footskills/video/6961627566411222278',
        description: 'Ronaldo jump on marcelo 😂',
        user_id: 4,
        music: 'Copines ac. Isli - Bombxel',
        comments: 21,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://www.tiktok.com/@drifterjjlin/video/6963181412677618945',
        description: 'Come duet with me to my new song “Bedroom” with @annemarie',
        user_id: 1,
        music: 'Bedroom (feat. Anne-Marie) - JJ Lin',
        comments: 21,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://www.tiktok.com/@drifterjjlin/video/6926766414443400449',
        description: 'What did i just do?? #fyp',
        user_id: 1,
        music: 'Tag me if you make one hoes - no',
        comments: 32,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://www.tiktok.com/@drifterjjlin/video/6920531719883918593',
        description: 'how’s this?',
        user_id: 1,
        music: 'YRN (tik tok) - Tyler April',
        comments: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://www.tiktok.com/@drifterjjlin/video/6902003008079400193',
        description: 'Join me and the real @steveaoki (not this one) on our Dec 9th #NOTTONIGHT TikTok Live Stream!!',
        user_id: 1,
        music: 'Adams Family - Circus Band',
        comments: 22,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://www.tiktok.com/@jevinkiong3/video/6958707374873971970',
        description: '',
        user_id: 2,
        music: 'original sound - jevin Kiong',
        comments: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://www.tiktok.com/@jevinkiong3/video/6958356773950491906',
        description: '',
        user_id: 2,
        music: 'original sound - jevin Kiong',
        comments: 50,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://www.tiktok.com/@jevinkiong3/video/6845217518550830337',
        description: '',
        user_id: 2,
        music: 'original sound - jevin Kiong',
        comments: 14,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://www.tiktok.com/@vtkh2004/video/6962834815305436417',
        description: 'Tếu quá 🤣🤣🤣',
        user_id: 3,
        music: 'เสียงต้นฉบับ - 🌿🌿Sy kunza🌿🌿',
        comments: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://www.tiktok.com/@vtkh2004/video/6962465396163185922',
        description: '',
        user_id: 3,
        music: '@dicaoshop 😙😙😙😙',
        comments: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://www.tiktok.com/@vtkh2004/video/6958804519991905537',
        description: 'Cả nhà ngủ ngon ❤️ Hôm nay up trễ quá',
        user_id: 3,
        music: 'nhạc nền - Vũ Thị Khánh Huyền',
        comments: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://www.tiktok.com/@vtkh2004/video/6957921973221494017',
        description: 'La la la ',
        user_id: 3,
        music: 'nhạc nền - Vũ Thị Khánh Huyền',
        comments: 40,
        created_at: new Date(),
        updated_at: new Date(),
      },

    ];

    try {
      await queryInterface.bulkInsert('users', usersList);
      await queryInterface.bulkInsert('videos', videosList);
    } catch (error) {
      console.log(error);
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('videos', null, {});
  },
};
