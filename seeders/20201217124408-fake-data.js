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
        url: 'https://v39-as.tiktokcdn.com/a4a298954453e489572d17d42566bd61/60aa9ec5/video/tos/useast2a/tos-useast2a-pve-0068/b8b470eae9184e26938b66070f47c4e8/?a=1233&br=8010&bt=4005&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210523122750010115138176101BD4B4&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzp5ZXhnaXM7NTMzNzczM0ApZTQ4PGVlN2VpNzw1Ozo6NWc2Yy0vZy5iamdgLS1kMTZzc2FfYDEwYi0wX2AvNi01NjU6Yw%3D%3D&vl=&vr=',
        description: 'when goat gets angry 😠',
        user_id: 4,
        music: 'original sound - Timmitio',
        comments: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v39-as.tiktokcdn.com/52eb7c965e152ff9f1c90e26dd4fd776/60aa9eae/video/tos/alisg/tos-alisg-pve-0037/64e8d6d9cf2d4d1bb7a2cd2a434f07b0/?a=1180&br=1696&bt=848&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=20210523122750010115138176101BD4B4&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2tvcHFwN288NTMzODgzM0ApOWc3NjVkN2Q1N2U5NGg5NmdiNWNwMi5nZWdgLS1kLzRzczNeYDFfMzM0MjMyNC41NmI6Yw%3D%3D&vl=&vr=',
        description: 'Goat 🐐✨ weak foot',
        user_id: 4,
        music: 'baby I like ur style - tanyasedits',
        comments: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v39-as.tiktokcdn.com/de137a10cff6cd7ca50eb9125027b4b4/60aa9eb8/video/tos/alisg/tos-alisg-pve-0037c001/3abe42dc38274ae0a810d6e2f0197ac4/?a=1233&br=2280&bt=1140&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210523122750010115138176101BD4B4&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3hscW5paGtmNTMzODczM0ApNTdmNWQ2NmRnN2Y8N2U6ZWdjNF5vZGJhcGdgLS1kMTRzcy42YWEuYC5iMTIxNjJhMTM6Yw%3D%3D&vl=&vr=',
        description: 'Goat 🐐✨',
        user_id: 4,
        music: 'original sound - Football Tekkers',
        comments: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v39-as.tiktokcdn.com/17d476faa4b9637d8567b21de167e247/60aa9eb1/video/tos/useast2a/tos-useast2a-ve-0068c001/39f9dce7de2247c898329914db5e52cf/?a=1233&br=2930&bt=1465&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210523122750010115138176101BD4B4&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajQ1d3lpZnl1NDMzNzczM0ApMzQ5M2U2ODw6NzhmO2dpZ2c2MmRsYV5nbm5gLS1kMTZzc2IzNGJiYGIzMTZfMl40LTM6Yw%3D%3D&vl=&vr=',
        description: 'Ronaldo jump on marcelo 😂',
        user_id: 4,
        music: 'Copines ac. Isli - Bombxel',
        comments: 21,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v39-as.tiktokcdn.com/9f9d1fa63120c6f8d89dc27abc4e2625/60aa9ec8/video/tos/alisg/tos-alisg-pve-0037/9583f6d15a304c4b8c25a4dc26212fdf/?a=1180&br=2366&bt=1183&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=20210523122750010115138176101BD4B4&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3l2dXJxOjd2NTMzODgzM0ApaTtpN2ZlM2Q0NzQ6Z2c2aGdsbWozL2pqaGhgLS1kLzRzczM0NTI1NC0yMGBhYS1eNGE6Yw%3D%3D&vl=&vr=',
        description: 'Come duet with me to my new song “Bedroom” with @annemarie',
        user_id: 1,
        music: 'Bedroom (feat. Anne-Marie) - JJ Lin',
        comments: 21,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v39-as.tiktokcdn.com/78092090c58523fcac9dc2e82d1abf13/60aa9f8c/video/tos/alisg/tos-alisg-pve-0037/f3cc551993c545e78045010af0423c9c/?a=1180&br=1822&bt=911&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=20210523123126010115079060111C0B94&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ampqaWhqOmQ1NDMzNDgzM0ApNmlnaDY3ZWQ1NzQ5NWg5ZWdiMmwuY3FscGBgLS1iLzRzcy5eLTMyMDJiNWEzXjItNC46Yw%3D%3D&vl=&vr=',
        description: 'What did i just do?? #fyp',
        user_id: 1,
        music: 'Tag me if you make one hoes - no',
        comments: 32,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v39-as.tiktokcdn.com/6bd60da6cb797c41448e1cd844f50e30/60aa9f8a/video/tos/alisg/tos-alisg-pve-0037/c2ca339df1ab49378b87c673e06dc7f1/?a=1180&br=2122&bt=1061&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=20210523123126010115079060111C0B94&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3V2cHFwN245NTMzODgzM0ApNzk7aWZoO2Q4NzwzODhoPGdjNGFwMi4wX2NgLS1kLzRzczRgNi9gXmEvMDZiMi5gYDE6Yw%3D%3D&vl=&vr=',
        description: 'how’s this?',
        user_id: 1,
        music: 'YRN (tik tok) - Tyler April',
        comments: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v39-as.tiktokcdn.com/e505984d0ef96c5de23312985f095a6d/60aa9f95/video/tos/useast2a/tos-useast2a-pve-0068/543724944b41448f9e92f42bfb864574/?a=1233&br=3716&bt=1858&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210523123126010115079060111C0B94&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajRwbnlxdzZxNTMzNzczM0ApNmZlODU8M2RkN2ZpOjc4NGdsbm0tZ3I1aF5gLS1kMTZzczI1LTVjMC5eMzIzYmItNjU6Yw%3D%3D&vl=&vr=',
        description: 'Join me and the real @steveaoki (not this one) on our Dec 9th #NOTTONIGHT TikTok Live Stream!!',
        user_id: 1,
        music: 'Adams Family - Circus Band',
        comments: 22,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v39-as.tiktokcdn.com/c3050211f97b1b95e4bbd08196aa127c/60aa9f8b/video/tos/alisg/tos-alisg-pve-0037/2b670721bedb401f97e5180953d83283/?a=1180&br=2904&bt=1452&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=20210523123126010115079060111C0B94&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajg8OTxob3h3NTMzODgzM0ApOTw1O2dlOGVkNzVpODQ2M2dfYjNtaC9ibDZgLS1kLzRzczJeMTZgLTAyXi8tMy9eMTU6Yw%3D%3D&vl=&vr=',
        description: '',
        user_id: 2,
        music: 'original sound - jevin Kiong',
        comments: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v39-as.tiktokcdn.com/c5b64643fd4a5f8331447d9e64b0832c/60aa9fcd/video/tos/alisg/tos-alisg-pve-0037/9168608e54514ef68bdf71e5cd76cd77/?a=1180&br=3744&bt=1872&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=20210523123225010234099154041C0973&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajMzaDVtd3I8NTMzODgzM0ApOzg8PDY2OGRpN2k0ZzRoOmdyMWpoaGtlcWBgLS1kLzRzczAxNDE0NWAwM2MyNTVjNTA6Yw%3D%3D&vl=&vr=',
        description: '',
        user_id: 2,
        music: 'original sound - jevin Kiong',
        comments: 50,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v16.tiktokcdn.com/80c720139ece90cd8f01dd46beb31366/60aa9ff3/video/tos/alisg/tos-alisg-pve-0037c001/374a5836dd3340da8597fe206307389d/?a=1233&br=3420&bt=1710&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210523123225010234099154041C0973&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajt3N3dyZTUzNTMzODczM0ApOzc2N2Q5Mzw2NzczaDdpN2c1YWpiMmUycGdgLS1kMTRzc2M1NmMtMTRhYS8xYl8wMzQ6Yw%3D%3D&vl=&vr=',
        description: '',
        user_id: 2,
        music: 'original sound - jevin Kiong',
        comments: 14,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v16.tiktokcdn.com/a8b397350acbb7db88af19dee89ebd2e/60aa9fd6/video/tos/alisg/tos-alisg-pve-0037c001/ad7eec4a3d0b4956931027768691c27c/?a=1233&br=4066&bt=2033&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210523123225010234099154041C0973&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzhpNmZqZWs8NTMzODczM0ApOTo7O2hlOTxnN2doOmY4ZWdjYDUxNXE1MWdgLS1kMTRzczQvYjQxMWMxLTRfYjYtM2I6Yw%3D%3D&vl=&vr=',
        description: 'Tếu quá 🤣🤣🤣',
        user_id: 3,
        music: 'เสียงต้นฉบับ - 🌿🌿Sy kunza🌿🌿',
        comments: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v39-as.tiktokcdn.com/6fd0193fe3f69e69cac305808fe05955/60aaa0d7/video/tos/useast2a/tos-useast2a-pve-0068/b589b54b22334fcb87dc4570097e2593/?a=1233&br=1998&bt=999&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210523123651010234108080031CF1FF&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajhvODRrdW1mNTMzNzczM0ApO2Q8PDk2aDs6N2hpZzc1ZGdgaC5qbS5yZDBgLS1kMTZzczEuYTEvYF8wNS4xMTExY2M6Yw%3D%3D&vl=&vr=',
        description: '',
        user_id: 3,
        music: '@dicaoshop 😙😙😙😙',
        comments: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v16.tiktokcdn.com/705ba674dd1c3e623457013a17bf2df6/60aaa0d3/video/tos/alisg/tos-alisg-pve-0037/48c9ab5eb83a4557a88a8ca9113e2117/?a=1180&br=1824&bt=912&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=20210523123651010234108080031CF1FF&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3JsazszdTVpNTMzODgzM0ApMzdkOTwzO2VpNzNpOjRnM2cwaGBiMDIxYWRgLS1kLzRzc2IyLi5jMTUwNi4yYmM0XzQ6Yw%3D%3D&vl=&vr=',
        description: 'Cả nhà ngủ ngon ❤️ Hôm nay up trễ quá',
        user_id: 3,
        music: 'nhạc nền - Vũ Thị Khánh Huyền',
        comments: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v39-as.tiktokcdn.com/a29f20b1855eac51010290514bdb7599/60aaa112/video/tos/alisg/tos-alisg-pve-0037c001/f1c39d2dc7054a629b36cc54ebf14402/?a=1233&br=7760&bt=3880&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210523123747010115004070061CF151&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=andyaXZpamVtNTMzODczM0ApZDUzZjM4NWU7N2k6Ozw0aWcuLnJfa2RhLmRgLS1kMTRzc2NhLzJeLV4wMDJiYC4xYGI6Yw%3D%3D&vl=&vr=',
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
