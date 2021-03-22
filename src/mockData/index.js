import { LETTER_STATUS } from "../constants/letterStatus";

const userData = {
  id: 1,
  name: "Museop Kim",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/49878687?s=460&u=e739e45e9f39b5200339cca6dc293f934fa03bc0&v=4"
};

const firstSong = {
  id: 1,
  title: "밤편지",
  artist: "아이유",
  imageUrl: "http://i.maniadb.com/images/album/742/742576_1_f.jpg"
};

const secondSong = {
  id: 2,
  title: "감사",
  artist: "김동률",
  imageUrl: "http://i.maniadb.com/images/album/148/148138_1_f.jpg"
};

const thirdSong = {
  id: 3,
  title: "나는 그 사람이 아프다&nbsp; featuring 타루",
  artist: "에피톤 프로젝트",
  imageUrl: "http://i.maniadb.com/images/album/207/207778_1_f.jpg"
};

const fourthSong = {
  id: 4,
  title: "그랬나봐",
  artist: "김형중",
  imageUrl: "http://i.maniadb.com/images/album/107/107223_cda_f.jpg"
};

const fifthSong = {
  id: 5,
  title: "내 사람",
  artist: "김동률",
  imageUrl: "http://i.maniadb.com/images/album/723/723527_1_f.jpg"
};

const sixthSong = {
  id: 6,
  title: "커피 한잔 할래요",
  artist: "폴킴",
  imageUrl: "http://i.maniadb.com/images/album/743/743166_1_f.jpg"
};

const seventhSong = {
  id: 7,
  title: "밤편지",
  artist: "아이유",
  imageUrl: "http://i.maniadb.com/images/album/742/742576_1_f.jpg"
};

const eighthSong = {
  id: 8,
  title: "벚꽃엔딩",
  artist: "버스커버스커",
  imageUrl: "http://i.maniadb.com/images/album/697/697390_1_f.jpg"
};

const ninthSong = {
  id: 9,
  title: "오래된 노래",
  artist: "스탠딩 에그",
  imageUrl: "http://i.maniadb.com/images/album/728/728069_1_f.jpg"
};

const tenthSong = {
  id: 10,
  title: "잠이 오질 않네요",
  artist: "장범준",
  imageUrl: "http://i.maniadb.com/images/album/824/824487_1_f.jpg"
};

const eleventhSong = {
  id: 11,
  title: "봄날",
  artist: "방탄 소년단",
  imageUrl: "http://i.maniadb.com/images/album/741/741568_1_f.jpg"
};

const mockLetters = [
  {
    id: 1,
    song: firstSong,
    songStory:
      "사연입니다. 사연 내용은 다음과 같습니다. 사연은 100자까지만 보여 드릴 예정 입니다.",
    requestStatus: LETTER_STATUS.WAITING,
    createdDateTime: "2021-01-27 23:41",
    user: {
      ...userData,
      id: 8
    }
  },
  {
    id: 2,
    song: secondSong,
    songStory:
      "사연입니다. 사연 내용은 다음과 같습니다. 사연은 100자까지만 보여 드릴 예정 입니다.",
    requestStatus: LETTER_STATUS.WAITING,
    createdDateTime: "2021-01-27 23:41",
    user: userData
  },
  {
    id: 3,
    song: thirdSong,
    songStory:
      "사연입니다. 사연 내용은 다음과 같습니다. 사연은 100자까지만 보여 드릴 예정 입니다.",
    requestStatus: LETTER_STATUS.WAITING,
    createdDateTime: "2021-01-27 23:41",
    user: userData
  },
  {
    id: 4,
    song: fourthSong,
    songStory:
      "사연입니다. 사연 내용은 다음과 같습니다. 사연은 100자까지만 보여 드릴 예정 입니다.",
    requestStatus: LETTER_STATUS.WAITING,
    createdDateTime: "2021-01-27 23:41",
    user: userData
  },
  {
    id: 5,
    song: fifthSong,
    songStory:
      "사연입니다. 사연 내용은 다음과 같습니다. 사연은 100자까지만 보여 드릴 예정 입니다.",
    requestStatus: LETTER_STATUS.WAITING,
    createdDateTime: "2021-01-27 23:41",
    user: userData
  },
  {
    id: 6,
    song: sixthSong,
    songStory:
      "사연입니다. 사연 내용은 다음과 같습니다. 사연은 100자까지만 보여 드릴 예정 입니다.",
    requestStatus: LETTER_STATUS.PENDING,
    createdDateTime: "2021-01-27 23:41",
    user: userData
  },
  {
    id: 7,
    song: seventhSong,
    songStory:
      "사연입니다. 사연 내용은 다음과 같습니다. 사연은 100자까지만 보여 드릴 예정 입니다.",
    requestStatus: LETTER_STATUS.DONE,
    createdDateTime: "2021-01-27 23:41",
    user: userData
  },
  {
    id: 8,
    song: eighthSong,
    songStory:
      "사연입니다. 사연 내용은 다음과 같습니다. 사연은 100자까지만 보여 드릴 예정 입니다.",
    requestStatus: LETTER_STATUS.PENDING,
    createdDateTime: "2021-01-27 23:41",
    user: userData
  },
  {
    id: 9,
    song: ninthSong,
    songStory:
      "사연입니다. 사연 내용은 다음과 같습니다. 사연은 100자까지만 보여 드릴 예정 입니다.",
    requestStatus: LETTER_STATUS.DONE,
    createdDateTime: "2021-01-27 23:41",
    user: userData
  },
  {
    id: 10,
    song: tenthSong,
    songStory:
      "사연입니다. 사연 내용은 다음과 같습니다. 사연은 100자까지만 보여 드릴 예정 입니다.",
    requestStatus: LETTER_STATUS.WAITING,
    createdDateTime: "2021-01-27 23:41",
    user: userData
  },
  {
    id: 11,
    song: eleventhSong,
    songStory:
      "사연입니다. 사연 내용은 다음과 같습니다. 사연은 100자까지만 보여 드릴 예정 입니다.",
    requestStatus: "WAITING",
    createdDateTime: "2021-01-27 23:41",
    user: userData
  }
];

export default mockLetters;
