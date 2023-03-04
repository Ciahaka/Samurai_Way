import {v1} from 'uuid';

export type DialogDataType = {
  id: string
  name: string
}
export type MessageDataType = {
  id: string
  message: string
}
export type PostDataType = {
  id: string
  message: string
  likesCount: number
}
export type DialogsType = {
  dialogsData: DialogDataType[]
  messageData: MessageDataType[]
}
export type PostsType = {
  postsData: PostDataType[]

}
export type RootStateType = {
  dialogs: DialogsType
  posts: PostsType

}
export const rootState: RootStateType = {
  dialogs: {
    dialogsData: [
      {id: v1(), name: 'Oleg'},
      {id: v1(), name: 'Turbo'},
      {id: v1(), name: 'Morgan'},
      {id: v1(), name: 'Vadim'},
      {id: v1(), name: 'Алексей'},
      {id: v1(), name: 'ХАН'},
    ],
    messageData: [
      {id: v1(), message: 'Привет! Рады видеть тебя здесь!'},
      {id: v1(), message: 'Спасибо за приглашение!'},
      {id: v1(), message: 'Hi bro'},
    ],
  },
  posts: {
    postsData: [
      {id: v1(), message: 'Привет! Что нового?!', likesCount: 15},
      {id: v1(), message: 'Всё отлично! Как сам?', likesCount: 3},
      {id: v1(), message: 'В порядке! Спасибо зарядке!', likesCount: 8},
    ]
  },

}

export const addPostsMessage = (postMessage: string) => {
  const newPostsMessage = {
    id: v1(),
    message: postMessage,
    likesCount: 145
  };

  rootState.posts.postsData.push(newPostsMessage)

}




