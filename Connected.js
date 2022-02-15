// @ts-check
/* eslint-disable class-methods-use-this */

export default class Connected {
  constructor(connection) {
    this.connection = connection;
  }

  connect() {
    throw new Error('Connection has established already');
  }

  disconnect() {
    this.connection.setState('disconnected');
  }

  write(data) {
    this.connection.buffer.push(data);
  }

  getName() {
    return 'connected';
  }
}
