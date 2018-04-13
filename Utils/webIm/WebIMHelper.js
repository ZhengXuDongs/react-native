import WebIM from './WebIM.js';
let WebIMHelper = {};

WebIMHelper.sendPrivateText = (message, username, callback) => {
	var id = WebIM.conn.getUniqueId(); // 生成本地消息id
	var msg = new WebIM.message('txt', id); // 创建文本消息
	msg.set({
		msg: message, // 消息内容
		to: username, // 接收消息对象（用户id）
		roomType: false,
		success: function(id, serverMsgId) {
			callback(id, serverMsgId);
		},
		fail: function(e) {
			callback(null, "Send private text error")
		}
	});
	msg.body.chatType = 'singleChat';
	WebIM.conn.send(msg.body);
};
WebIMHelper.sendGroupText = function() {
	var id = WebIM.conn.getUniqueId(); // 生成本地消息id
	var msg = new WebIM.message('txt', id); // 创建文本消息
	var option = {
		msg: 'message content', // 消息内容
		to: 'group id', // 接收消息对象(群组id)
		roomType: false,
		chatType: 'chatRoom',
		success: function() {
			console.log('send room text success');
		},
		fail: function() {
			console.log('failed');
		}
	};
	msg.set(option);
	msg.setGroup('groupchat');
	WebIM.conn.send(msg.body);
};
WebIMHelper.sendRoomText = function() {
	var id = WebIM.conn.getUniqueId(); // 生成本地消息id
	var msg = new WebIM.message('txt', id); // 创建文本消息
	var option = {
		msg: 'message content', // 消息内容
		to: 'chatroom id', // 接收消息对象(聊天室id)
		roomType: true,
		chatType: 'chatRoom',
		success: function() {
			console.log('send room text success');
		},
		fail: function() {
			console.log('failed');
		}
	};
	msg.set(option);
	msg.setGroup('groupchat');
	WebIM.conn.send(msg.body);
};
export default WebIMHelper;