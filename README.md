# 슬랙봇 만들기

## 설명 아닌 설명

- 터미널에 ```$ node -v``` 을 입력 후 node 설치가 되어있는지 확인 후 없다면 ```$ brew install node``` 를 쳐서 설치해줍니다.
- 터미널에 ```$ npm init``` 을 입력하면 package.json이 생성됩니다.
- Node Slack SDK 중 ```$ npm install @slack/webhook``` 을 사용했습니다.
- [Slack API](https://api.slack.com) 홈페이지에 들어가 슬랙봇설정을 해줍니다.

## 후기 및 느낀점(?)

- .gitignore란 이름 그대로 Github에 commit and push 목록에서 제외시키는 명단(?)이라는 느낌을 받았습니다.
- ```const url = process.env.WEBHOOK_URL;``` 에 Slack API에서 제공해주는 url을 넣은채로 push를 했는데 놀랍게도 슬랙에서 악용하지 못하게 url을 막아버리는걸 보고 엄청 신기하고 대단하다고 느꼈습니다.
- 해결책: .env에 링크를 넣어 대체하는 방식으로 진행했습니다. 
