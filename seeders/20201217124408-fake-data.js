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
        url: 'https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/06d841fe1f994807b88ca3ee83c674bc/?a=1988&br=2742&bt=1371&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1621702640&l=202105221057030102340941473D921ED2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=anI2Omd3NDs6NTMzNzczM0ApOmU7M2c4NzxnNzM1ZGhmZmdpcmwvc2xfcWdgLS1kMTZzczQyMWBfMzY1MzNiNjReMzU6Yw%3D%3D&signature=cd5cb1a446753504cb260d58b4814376&tk=tt_webid_v2&vl=&vr=',
        description: 'when goat gets angry 😠',
        user_id: 4,
        music: 'original sound - Timmitio',
        comments: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/1a29bc188e434fbda00349c346e0f210/?a=1988&br=1910&bt=955&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1621702748&l=202105221058550101152280841991C91C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=ajk1ZzZvOWc1NTMzNzczM0ApZTc0NDppODtmNzNoPGhoaGdjMW5ybmsxL2dgLS1kMTZzcy9jNTQwNjMvM2E0YzIwX2I6Yw%3D%3D&signature=37eb50b359981da161679100c6a31121&tk=tt_webid_v2&vl=&vr=',
        description: 'Goat 🐐✨ weak foot',
        user_id: 4,
        music: 'baby I like ur style - tanyasedits',
        comments: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/d121ae5cc341459e85412c69a640ede1/?a=1988&br=2916&bt=1458&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1621702804&l=202105221059430102340940190692655A&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=M3Blcmd4bm05NTMzNzczM0ApaGZoMzs3ZWQ8N2g1NGQ8ZWdnaWQwYi01a2JgLS1kMTZzc18uL2AuYDAwLjYyLTQyLTA6Yw%3D%3D&signature=97b2740f6e14fc86c646e3c61c16908d&tk=tt_webid_v2&vl=&vr=',
        description: 'Goat 🐐✨',
        user_id: 4,
        music: 'original sound - Football Tekkers',
        comments: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/9524ea64d5c3493aa5c9ebce404d2e7c/?a=1988&br=1320&bt=660&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1621702899&l=20210522110130010115153148039243CA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=M2xnaGpxOHNkNTMzNzczM0ApNDo3aTwzNDw2Nzw2NjZoNWdpZ29qMHNmamJgLS1kMTZzc2ExYWNhMGMzMTRjLmE2NjQ6Yw%3D%3D&signature=d1efca16f157f8acc81e1391b02b9937&tk=tt_webid_v2&vl=&vr=',
        description: 'Ronaldo jump on marcelo 😂',
        user_id: 4,
        music: 'Copines ac. Isli - Bombxel',
        comments: 21,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037/3e612e90229b41f3944afce8845c3c29/?a=1988&br=3562&bt=1781&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&expire=1621703026&l=202105221102460101152280690D920CB7&lr=tiktok&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=am9lN3hqbWk2NTMzODgzM0ApNjY5Nmc1Z2U2N2hnZ2Y7O2dsbmNfZGhwLWVgLS1kLzRzczRiNV8xMTVeYzUuYGAxNGM6Yw%3D%3D&signature=781b368d43bb277e5ae4b38b0d8401d6&tk=tt_webid_v2&vl=&vr=',
        description: 'Come duet with me to my new song “Bedroom” with @annemarie',
        user_id: 1,
        music: 'Bedroom (feat. Anne-Marie) - JJ Lin',
        comments: 21,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037/f2867bcc2f954aa5b59d50710785042b/?a=1988&br=2008&bt=1004&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&expire=1621703010&l=2021052211032301023410514166929C2D&lr=tiktok&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=amQ5OHFoPHFnMzMzNTgzM0ApNjY1ZGVoNDw7N2VlZGhoZmdrZWUwaW0uL2RgLS1eLzRzczI0L2BjLzQuYDBfNDU2NTE6Yw%3D%3D&signature=06be8dee6a370494675daca98acba3c0&tk=tt_webid_v2&vl=&vr=',
        description: 'What did i just do?? #fyp',
        user_id: 1,
        music: 'Tag me if you make one hoes - no',
        comments: 32,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037/43c1e6bdb98c4cb996a70f03e5a2d22f/?a=1988&br=4280&bt=2140&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&expire=1621703070&l=202105221104210101150790671492628A&lr=tiktok&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=am9wNHA4eXVkMzMzNzgzM0ApNDpkZjg6NGVoN2U0N2U0OWcxNDJlNW1jaTJgLS1hLzRzcy8wYi4wMWIwLmEtMzM2Ml86Yw%3D%3D&signature=2ba340cc3d67b39111289303c94bd4bf&tk=tt_webid_v2&vl=&vr=',
        description: 'how’s this?',
        user_id: 1,
        music: 'YRN (tik tok) - Tyler April',
        comments: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/6fe2a274b8904fbf8886a52e0da80094/?a=1988&br=2136&bt=1068&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&expire=1621703128&l=202105221105130101151510361391F143&lr=tiktok&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=am9zOGk1dmRneTMzNzgzM0ApaDppN2Y1ODw0NzwzN2llZ2dxbi1oMGM0YjFfLS0tLzRzc2EyMzMyL2FfNV8vLmMzMmA6Yw%3D%3D&signature=f1f423caf2f5ed1cd63e575fa5d03a6d&tk=tt_webid_v2&vl=&vr=',
        description: 'Join me and the real @steveaoki (not this one) on our Dec 9th #NOTTONIGHT TikTok Live Stream!!',
        user_id: 1,
        music: 'Adams Family - Circus Band',
        comments: 22,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037/f760a3a7c1d84c6c8b28ad23e758d08f/?a=1988&br=2940&bt=1470&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&expire=1621755035&l=2021052301302801023410502664CCFE88&lr=tiktok&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=ajdvcTpwOzg3NTMzODgzM0ApOGVoZjg4ODwzNzU0N2Y7NGdtY2xlbW8taTZgLS1kLzRzczUvLWMzYWIuMWIuNGMxMDQ6Yw%3D%3D&signature=f89975a2124af87c6ff80b024437c589&tk=tt_webid_v2&vl=&vr=',
        description: '',
        user_id: 2,
        music: 'original sound - jevin Kiong',
        comments: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037/76c374457f304bd090924a9db6305131/?a=1988&br=4184&bt=2092&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&expire=1621755126&l=202105230131590101151192341ACCB430&lr=tiktok&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=ajQ8cTpwO2ZqNTMzODgzM0ApNWY5NWU6OWVlNzk7MzZpOWdfa3NlbW9kbDVgLS1kLzRzc18zL2BhYTUtNDA0MzYyMy06Yw%3D%3D&signature=1c676f577afb015cd7e214464632ed03&tk=tt_webid_v2&vl=&vr=',
        description: '',
        user_id: 2,
        music: 'original sound - jevin Kiong',
        comments: 50,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037/6bc6485eb8e6405cb81978a1cd85bd55/?a=1988&br=2760&bt=1380&cd=0%7C0%7C0&ch=0&cr=0&cs=0&dr=3&ds=3&er=&expire=1621755228&l=202105230132490101151192341ACCC2D5&lr=tiktok&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=M3k2aWs4eDVrdTMzNzgzM0ApMzg7aTxmN2U7NzU6MzxpOGc2LTRnZmdrZXNfLS00LzRzc141MDJiYl9iYDUyMC5gMzQ6Yw%3D%3D&signature=9a80a011896a0efb91f56d9913bba3ac&tk=tt_webid_v2&vl=&vr=',
        description: '',
        user_id: 2,
        music: 'original sound - jevin Kiong',
        comments: 14,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037/afd50b4c1fe24018b866a3411995c8a7/?a=1988&br=3176&bt=1588&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&expire=1621755243&l=202105230133520101152290600CCDFEB4&lr=tiktok&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=M287M2c0dnBpNTMzODgzM0ApZzs3ZWhkM2U4NzQ7O2Y5OWcvZDFtNF5xXmRgLS1kLzRzc2A1YV40YjZhX18uL19eMTY6Yw%3D%3D&signature=2c77c39945c894594d4ec1b4059b2f8f&tk=tt_webid_v2&vl=&vr=',
        description: 'Tếu quá 🤣🤣🤣',
        user_id: 3,
        music: 'เสียงต้นฉบับ - 🌿🌿Sy kunza🌿🌿',
        comments: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037/e9ebdb6f0173480eb72f825f0594eb62/?a=1988&br=4090&bt=2045&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&expire=1621755565&l=2021052301391001023410908615CC910E&lr=tiktok&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=amZscnBmeHF0NTMzODgzM0ApaWlkNjc8NWQzNzszMzM3ZmdqMmpjbWtlXmNgLS1kLzRzc2AtMGEzYTA2LjJhYmAtNS86Yw%3D%3D&signature=55f3091df09073132aa14227ea42d3a6&tk=tt_webid_v2&vl=&vr=',
        description: '',
        user_id: 3,
        music: '@dicaoshop 😙😙😙😙',
        comments: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037/e607e2f5d2b34428a34c9c2e69974212/?a=1988&br=4670&bt=2335&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&expire=1621755602&l=2021052301395001023408703837CC3CBE&lr=tiktok&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=ajo7aztxOm9kNTMzODgzM0ApZ2Y3PGlpZWU8N2k4PGc5PGdjLzVkYGNqNDZgLS1kLzRzc2I0LS1hMjFjY2JjYjFhXzA6Yw%3D%3D&signature=d1247fc949136cba45b81773a6424505&tk=tt_webid_v2&vl=&vr=',
        description: 'Cả nhà ngủ ngon ❤️ Hôm nay up trễ quá',
        user_id: 3,
        music: 'nhạc nền - Vũ Thị Khánh Huyền',
        comments: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037/03e28a7ffb9c4154bf80f9328a98d74b/?a=1988&br=3186&bt=1593&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&expire=1621755642&l=2021052301402701011515315903CDA743&lr=tiktok&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=ajdrcTpwO2RyNTMzODgzM0ApODw5Ojw4M2Q5N2lpO2k0ZmdgZXFlbW9kLzRgLS1kLzRzczRjX2M2NTExNjUtXl9jYTY6Yw%3D%3D&signature=332d1b4f093d500750a521336943c8d5&tk=tt_webid_v2&vl=&vr=',
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
