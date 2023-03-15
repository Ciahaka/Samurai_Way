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
export type StoreType = {
  _rootState: RootStateType
  addPostsMessage: () => void
  updateTextPostsMessage: (newText: string) => void
  addDialogsMessage: () => void
  updateTextDialogsMessage: (newText: string) => void
  _bllSetRender: (state: RootStateType) => void
  subscribe: (observer: (state: RootStateType) => void) => void
  getState: () => RootStateType
}

export const store: StoreType = {
  _rootState: {
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

  },
  addPostsMessage() {
    const newPostsMessage = {
      id: v1(),
      message: this._rootState.posts.textForUpdate,
      likesCount: 145
    };

    this._rootState.posts.postsData.push(newPostsMessage)
    this._rootState.posts.textForUpdate = ''
    this._bllSetRender(this._rootState)
  },
  updateTextPostsMessage(newText: string) {

    this._rootState.posts.textForUpdate = newText
    this._bllSetRender(this._rootState)
  },
  addDialogsMessage() {
    const newPostsMessage = {
      id: v1(),
      message: this._rootState.dialogs.dialogsMessageValue,

    };

    this._rootState.dialogs.messageData.push(newPostsMessage)
    this._rootState.dialogs.dialogsMessageValue = ''
    this._bllSetRender(this._rootState)
  },
  updateTextDialogsMessage(newText: string) {

    this._rootState.dialogs.dialogsMessageValue = newText
    this._bllSetRender(this._rootState)
  },
  _bllSetRender(state: RootStateType) {

  },
  subscribe(observer) {
    this._bllSetRender = observer
  },
  getState() {
    return this._rootState
  }
}





