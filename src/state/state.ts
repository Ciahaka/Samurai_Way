export type DialogDataType = {
  id: string
  name: string
}
export type MessageDataType = {
  id: string
  message: string
}
export type PostDataType = {
  id: number
  message: string
  likesCount: number
}
export type DialogsType = {
  dialogsData: DialogDataType[]
  messageData: MessageDataType[]
}
export type PostsType = {
  postsData:PostDataType[]
}
export type RootStateType = {
  dialogs:DialogsType
  posts:PostsType
}
export const rootState:RootStateType = {
  dialogs: {
    dialogsData: [
      {id: '1', name: 'Oleg'},
      {id: '2', name: 'Turbo'},
      {id: '3', name: 'Morgan'},
      {id: '4', name: 'Vadim'},
      {id: '5', name: 'Алексей'},
      {id: '6', name: 'ХАН'},
    ],
    messageData: [
      {id: '1', message: 'Привет! Рады видеть тебя здесь!'},
      {id: '2', message: 'Спасибо за приглашение!'},
      {id: '3', message: 'Hi bro'},
    ],
  },
  posts: {
    postsData: [
      {id: 1, message: 'Привет! Что нового?!', likesCount: 15},
      {id: 2, message: 'Всё отлично! Как сам?', likesCount: 3},
      {id: 3, message: 'В порядке! Спасибо зарядке!', likesCount: 8},
    ]
  },
}




