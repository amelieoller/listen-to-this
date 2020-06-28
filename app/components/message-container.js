import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import fetch from 'fetch';

export default class MessageContainerComponent extends Component {
  @tracked
  messages = [];

  @action
  async loadMessages() {
    const channelId = this.args.channel.id;
    const bandId = this.args.channel.band_id;

    const resp = await fetch(
      `http://localhost:3000/api/v1/bands/${bandId}/channels/${channelId}/messages`
    );

    this.messages = await resp.json();
  }

  @action
  async createMessage(content) {
    const channel_id = this.args.channel.id;
    const { band_id } = this.args.channel;
    const user_id = 1;

    const resp = await fetch(
      `http://localhost:3000/api/v1/bands/${band_id}/channels/${channel_id}/messages`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          channel_id,
          band_id,
          user_id,
          content,
        }),
      }
    );

    if (!resp.ok) throw Error('Could not save message');

    const messageData = await resp.json();
    this.messages = [...this.messages, messageData];
  }

  @action
  async deleteMessage(messageId) {
    const channel_id = this.args.channel.id;
    const { band_id } = this.args.channel;

    const resp = await fetch(
      `http://localhost:3000/api/v1/bands/${band_id}/channels/${channel_id}/messages/${messageId}`,
      {
        method: 'DELETE',
      }
    );

    if (!resp.ok) throw Error('Message could not be deleted');

    this.messages = this.messages.filter((m) => m.id !== messageId);
  }
}
