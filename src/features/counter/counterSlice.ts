import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchCount } from './counterAPI';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

/*
スライスはアプリの単一機能のReduxレデューサーロジックとアクションのコレクション
通常は1つのファイルにまとめて定義される
ルートRedux状態オブジェクトを複数のスライスに分割することに由来する

スライスレデューサーとアクションの作成
*/
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  /* 
  アクションはプレーンオブジェクト(0個以上のキーと値を持つ)であり、typeフィールドは常に文字列
  アクションオブジェクトを作成して返す「アクションクリエーター関数」がある
  これらのアクションオブジェクト、型文字列、アクションの内容をcreateSliceで定義する
  UNDERSTAND: Reduxの状態(ストア)に触るときは「スライスに登録されたアクションを呼び出す」

  レデューサーが現在の値を変更することは、Reduxでは許可されていない
  UNDERSTAND: 必ずアクションを介してstoreの内容を変更する
  米: storeの内容をコピーすることは可能

  */
  reducers: {
    increment: (state) => {
      /*
      incrementレデューサーは常に1を追加する(1を追加しただけで更新はしていない?)
      */
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

/*
useSelectorフックを使用すると、コンポーネントはReduxストアの状態から必要なデータを抽出できる
Reduxストアにアクセスしたいが、コンポーネントファイルに直接ストアの状態をインポートすることは許可されていない
useSelectorを使用することでstore.getStateを呼び出すことができるので、
下記の記述でストアの値を取得することができる
const count = useSelector(selectCount)
また、アクションを呼び出す場合はuseDispatchを使用する
const dispatch = useDispatch()

コンポーネントがuseSelector, useDispatchフックを使用してReduxストアと通信できることを確認した
しかし、ストアをインポートしていないのに、フックはどのようにしてReduxストアと通信するのか


*/
export const selectCount = (state: RootState) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = (amount: number): AppThunk => (
  dispatch,
  getState
) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;
