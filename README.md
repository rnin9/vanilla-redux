# Vanilla-redux

 - store란?
  - state를 관리하는 장소, createStore()로 시작.
 
 - reducer란? 
  - 순수한 함수, 변경을 반영하는 함수, 같은 값이 들어가면 같은 값이 나와야 한다.
  - 현재의 상태가 없으면, 초기값으로 시작, 아니면 현재 값으로 시작
  - action을 인자로 받는다. 이는 dispatch로부터 받을 수 있음.
  - return하는 값은 application의 state가 된다.

 - action 이란?
  - reducer에서 변경을 진행하는 함수
  

 - dispatch란?
  - reducer에게 어떤 action을 할 것인지 Message를 보내는함수
  - 해당 message는 객체 (object)여야 한다! 무조건 type이여야 한다.  

 - subscribe란?
  - store 내의 변화를 알게 해준다!

- Action type 지정하는 이유? 
 - javascript가 오류(오타)를 쉽게 찾아낼 수 있도록 하기위함

- Mutation X  ex) state.push('string')
  - 새로운 state를 생성해서 return해야 한다!
  - 변경이 저장되지않는 mutate 함수를 사용하면 안되며, filter와 같은 새로운 array를 만들어내는 함수를 사용!
   - state는 읽기 전용이므로,
