import {v1} from 'uuid';


let bllSetRender = (state: RootStateType) => {

}
export const subscribe = (observer: (state: RootStateType) => void) => {
  bllSetRender = observer
}


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
  dialogsMessageValue: string
}
export type PostsType = {
  textForUpdate: string
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
    dialogsMessageValue: ''
  },
  posts: {
    textForUpdate: '',
    postsData: [
      {id: v1(), message: 'Привет! Что нового?!', likesCount: 15},
      {id: v1(), message: 'Всё отлично! Как сам?', likesCount: 3},
      {id: v1(), message: 'В порядке! Спасибо зарядке!', likesCount: 8},
    ]
  },

}

export const addPostsMessage = () => {
  const newPostsMessage = {
    id: v1(),
    message: rootState.posts.textForUpdate,
    likesCount: 145
  };

  rootState.posts.postsData.push(newPostsMessage)
  rootState.posts.textForUpdate = ''
  bllSetRender(rootState)
}

export const updateTextPostsMessage = (newText: string) => {

  rootState.posts.textForUpdate = newText
  bllSetRender(rootState)
}

export const addDialogsMessage = () => {
  const newPostsMessage = {
    id: v1(),
    message: rootState.dialogs.dialogsMessageValue,

  };

  rootState.dialogs.messageData.push(newPostsMessage)
  rootState.dialogs.dialogsMessageValue = ''
  bllSetRender(rootState)
}

export const updateTextDialogsMessage = (newText: string) => {

  rootState.dialogs.dialogsMessageValue = newText
  bllSetRender(rootState)
}





