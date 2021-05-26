module.exports = {
  up: async (queryInterface) => {
    const usersList = [
      {
        profile_pic: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        password: 'qwerty',
        username: 'drifterjjlin',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        profile_pic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        password: 'qwerty',
        username: 'jevinkiong3',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        profile_pic: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
        password: 'qwerty',
        username: 'vtkh2004',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        profile_pic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
        password: 'qwerty',
        username: '7_footskills',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    const videosList = [
      {
        url: 'https://assets.mixkit.co/videos/preview/mixkit-winter-fashion-cold-looking-woman-concept-video-39874-large.mp4',
        description: 'when goat gets angry 😠',
        user_id: 4,
        music: 'original sound - Timmitio',
        comments: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-fashion-woman-with-silver-makeup-39875-large.mp4',
        description: 'Goat 🐐✨ weak foot',
        user_id: 4,
        music: 'baby I like ur style - tanyasedits',
        comments: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://assets.mixkit.co/videos/preview/mixkit-mysterious-pale-looking-fashion-woman-at-winter-39878-large.mp4',
        description: 'Goat 🐐✨',
        user_id: 4,
        music: 'original sound - Football Tekkers',
        comments: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4',
        description: 'Ronaldo jump on marcelo 😂',
        user_id: 4,
        music: 'Copines ac. Isli - Bombxel',
        comments: 21,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4',
        description: 'Come duet with me to my new song “Bedroom” with @annemarie',
        user_id: 1,
        music: 'Bedroom (feat. Anne-Marie) - JJ Lin',
        comments: 21,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://assets.mixkit.co/videos/preview/mixkit-womans-feet-splashing-in-the-pool-1261-large.mp4',
        description: 'What did i just do?? #fyp',
        user_id: 1,
        music: 'Tag me if you make one hoes - no',
        comments: 32,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
        description: 'how’s this?',
        user_id: 1,
        music: 'YRN (tik tok) - Tyler April',
        comments: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://assets.mixkit.co/videos/preview/mixkit-pink-and-blue-ink-1192-large.mp4',
        description: 'Join me and the real @steveaoki (not this one) on our Dec 9th #NOTTONIGHT TikTok Live Stream!!',
        user_id: 1,
        music: 'Adams Family - Circus Band',
        comments: 22,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://assets.mixkit.co/videos/preview/mixkit-green-ink-1196-large.mp4',
        description: '',
        user_id: 2,
        music: 'original sound - jevin Kiong',
        comments: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://assets.mixkit.co/videos/preview/mixkit-yellow-and-orange-ink-1198-large.mp4',
        description: '',
        user_id: 2,
        music: 'original sound - jevin Kiong',
        comments: 50,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://assets.mixkit.co/videos/preview/mixkit-purple-and-white-ink-1203-large.mp4',
        description: '',
        user_id: 2,
        music: 'original sound - jevin Kiong',
        comments: 14,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://assets.mixkit.co/videos/preview/mixkit-man-under-multicolored-lights-1237-large.mp4',
        description: 'Tếu quá 🤣🤣🤣',
        user_id: 3,
        music: 'เสียงต้นฉบับ - 🌿🌿Sy kunza🌿🌿',
        comments: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://assets.mixkit.co/videos/preview/mixkit-father-and-his-little-daughter-eating-marshmallows-in-nature-39765-large.mp4',
        description: '',
        user_id: 3,
        music: '@dicaoshop 😙😙😙😙',
        comments: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://assets.mixkit.co/videos/preview/mixkit-little-girl-in-nature-with-a-marshmallow-on-a-twig-39766-large.mp4',
        description: 'Cả nhà ngủ ngon ❤️ Hôm nay up trễ quá',
        user_id: 3,
        music: 'nhạc nền - Vũ Thị Khánh Huyền',
        comments: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-with-a-cold-and-pale-appearance-39877-large.mp4',
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
