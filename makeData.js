// To create the output in a txt file, run:
// node makeData.js > output.txt

// The new file output.txt will contain the console.log output

const likesData = [];
// for (let i = 1; i < 18; i += 1) {
for (let j = 99; j < 137; j += 1) {
  likesData.push({
    user_id: Math.floor(Math.random() * 17) + 1,
    video_id: j,
    created_at: 'new Date()',
    updated_at: 'new Date()',
  });
}
// }

console.log(likesData);
