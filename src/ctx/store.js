import React from 'react';

export default function build(){
  const state = {};
  const listeners = {};

  let cnt = 0;

  const next = ()=>{
    cnt++;
    return cnt;
  };

  const connect = (k, l)=>{
    let id = next();
    if(Array.isArray(k)){
      k.forEach((k)=>{
        listeners[k] = listeners[k] || {};
        listeners[k][id]=l;
      });
    } else {
      listeners[k] = listeners[k] || {};
      listeners[k][id]=l;
    }
    return id;
  };

  const disconnect = (id) => {
    for(let k in listeners) {
      if(listeners.hasOwnProperty(k)) {
        delete listeners[k][id];
      }
    }
  };

  const setState = (st)=>{
    for(let k in st) {
      if(st.hasOwnProperty(k)){
        state[k] = st[k];
        for(let lid in listeners[k]) {
          listeners[k][lid](state[k]);
        };
      }
    }
  };
  let store = {
    state: state,
    connect: connect,
    disconnect: disconnect,
    setState: setState,
    bind: (cmp, keys)=>{
      return class X extends React.Component {
        componentWillMount() {
          this.listeners = [];
          keys.forEach((key)=>{
            this.listeners.push(store.connect([key], (data)=>{
              state[key] = data;
              this.setState(state);
            }));
          });
        }

        componentWillUnmount() {
          (this.listeners || []).forEach((l)=>{
            store.disconnect(l);
          });
        }

        render() {
          let state = this.state || {};
          return React.createElement(cmp, state);
        }
      };
    }
  };

  return store;
}
