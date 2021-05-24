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
