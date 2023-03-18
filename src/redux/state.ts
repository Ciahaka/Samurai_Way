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
  _bllSetRender: (state: RootStateType) => void
  subscribe: (observer: (state: RootStateType) => void) => void
  getState: () => RootStateType
  dispatch: (action: ActionType) => void
}

export type AddPostActionType = {
  type: 'ADD-POST-MESSAGE'
}
export type UpdateTextPostActionType = {
  type: 'UPDATE-TEXT-POST-MESSAGE'
  newText: string
}
export type AddPostDialogsType = {
  type: 'ADD-DIALOGS-MESSAGE'
}
export type UpdateTextDialogsActionType = {
  type: 'UPDATE-DIALOGS-MESSAGE'
  newText: string
}

export type ActionType = AddPostActionType
  | UpdateTextPostActionType
  | AddPostDialogsType
  | UpdateTextDialogsActionType

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
  _bllSetRender() {

  },
  subscribe(observer) {
    this._bllSetRender = observer
  },
  getState() {
    return this._rootState
  },
  dispatch(action) {
    switch (action.type) {
      case 'ADD-POST-MESSAGE': {
        const newPostsMessage = {
          id: v1(),
          message: this._rootState.posts.textForUpdate,
          likesCount: 145
        };

        this._rootState.posts.postsData.push(newPostsMessage)
        this._rootState.posts.textForUpdate = ''
        this._bllSetRender(this._rootState)
      }
        break
      case 'UPDATE-TEXT-POST-MESSAGE': {
        this._rootState.posts.textForUpdate = action.newText
        this._bllSetRender(this._rootState)
      }
        break
      case 'ADD-DIALOGS-MESSAGE': {
        const newPostsMessage = {
          id: v1(),
          message: this._rootState.dialogs.dialogsMessageValue,

        };

        this._rootState.dialogs.messageData.push(newPostsMessage)
        this._rootState.dialogs.dialogsMessageValue = ''
        this._bllSetRender(this._rootState)
      }
        break
      case 'UPDATE-DIALOGS-MESSAGE': {
        this._rootState.dialogs.dialogsMessageValue = action.newText
        this._bllSetRender(this._rootState)
      }
    }
  }
}





