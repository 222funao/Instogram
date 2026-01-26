import { Controller } from "@hotwired/stimulus"
import { subscribeToConversation } from "channels/conversation_channel"

export default class extends Controller {
  static values = { conversationId: Number }

  connect() {
    subscribeToConversation(this.conversationIdValue)
  }
}
