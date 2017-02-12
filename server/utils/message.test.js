var expect = require('expect');

var {generateMessage} = require('./message');
var {generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Denham';
    var text = 'Hello World!'
    var message = generateMessage(from, text);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location message object', () => {
    var from = 'Denham';
    var lat = 1;
    var lon = 1;
    var message = generateLocationMessage(from, lat, lon);
    expect(message.createdAt).toBeA('number');
    expect(message.url).toBe('https://www.google.com/maps?q=1,1');
  });
});
