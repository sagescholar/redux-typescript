import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Data } from './features/data/Data';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Data />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
  /* ストア
  Reduxアプリケーションの状態はストアと呼ばれるオブジェクトに存在する
  ストアはレデューサーに渡すことによって作成されgetState、現在の状態値を返すと呼ばれるメソッドがある
  import { configureStore } from '@reduxjs/toolkit'
  const store = configureStore({ reducer: counterReducer })
  console.log(store.getState())

  Reduxストアにはdispatchというメソッドがある、これが状態を更新する唯一の方法
  store.dispatch()はアクションオブジェクトを呼び出して渡すことです。
  ストアはレデューサー関数を実行し、新しい状態値を内部に保存getState()します。
  呼び出して、更新された値を取得できます。

  store.dispatch({ type: 'counter/increment' })
  console.log(store.getState())

  アプリケーションではアクションのディスパッチを「イベントのトリガー」として考える。
  何かが起こったので店にそれを知ってもらいたい。
  レデューサーはイベントリスナーのように機能し、関心のあるアクションを聞くとそれに応じて状態を更新する。

  セレクター
  ストアの状態値から特定の情報を抽出する方法を知っている関数
  アプリケーションが大きくなるとアプリのロジックの繰り返しを回避できる
  const selectCounterValue = state -> state.value
  const currentValue = selectCounterValue(store.getState())
  console.log(currentValue)

  Reduxアプリケーションのデータフロー
  状態は特定の時点でのアプリ状態を表す
  UIはその状態に基づいてレンダリングする
  何かが発生すると、発生した内容に基づいて状態が更新される
  UIは新しい状態に基づいて再レンダリングされる

  初期設定
  ・Reduxストアはルートリデューサーを使用して作成される
  ・ストアはルートレデューサーを1回呼び出し、戻り値を初期値として保存する
  ・UIが最初にレンダリングされる時、UIコンポーネントはReduxストアの現在の状態にアクセスし、
　　そのデータを使用して何をレンダリングするかを決定する。
　　また状態が変更されたがどうかを知ることができるように、将来のストア更新をサブスクライブする。
　更新
　・アプリで何かが発生する
　・Reduxストアにdispatchする
　  dispatch({type: 'counter/increment})
　・ストアは前stateと現在のレデューサー関数を再度実行しaction、戻り値を新しいものとして保存する
　・ストアはサブスクライブしているUI全てに対してストアが更新されたことを通知する
　・ストアからデータを必要とする各UIコンポーネントは、必要な状態の部分が変更されているかどうか確認する
　・データが変更されたことを確認する各コンポーネントは新しいデータで強制的に再レンダリングされる
  */

  /*
  レデューサーはstateとaction、オブジェクトを必要に応じて更新する方法を決定し、新たな状態にする
  (state, action) => newState
  レデューサーは受信したアクション(イベント)に基づいてイベントを処理するイベントリスナーと考えることができる
  Redurcer関数はArray.reduce()にコールバック関数が似ているためそう呼ばれている

  stateとaction引数に基づいて、新しい状態を計算する必要がある
  既存のstateを直接変更してはいけない、既存の値をコピーして変更すｒことは可能
  非同期ロジックを実行したり、ランダムな値を計算したり、その他の副作用を引き起こしてはいけない

  レデューサーのロジックは同じ一連の手順を踏む
  レデューサーがアクションにより状態の変更をするか

  function counterReducr(state = initialState, action){
    if(action.type === 'counter/increment){
      return{
        ...state,
        value: state.value + 1
      }
    }
    return state
  }
  */

  /*
  //actionオブジェクトは、何が起こったかに関する追加情報を含む他のフィールドを含むことができる
  //そのフィールドをpayloadと呼ぶ
  const addTodoAction = {
    type: 'todo/todoAdded',
    payload: text
  }
  */

  /*
  const obj = {
    a: {
      c: 3
    },
    b: 2
  }

  const obj2 = {
    ...obj
  }

  const arr = ['a', 'b']
  const arr2 = arr.concat('c')
  const arr3 = arr.slice()

  arr3.push('c')*/

  /*
  const [ counter, setCounter ] = useState(0);

  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  return(
    <div>
      value: {counter} <button onClick={increment}>Increment</button>
    </div>
  )*/
