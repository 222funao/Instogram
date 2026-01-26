import consumer from "./consumer"

export function subscribeToConversation(conversationId) {
  consumer.subscriptions.create(
    { channel: "ConversationChannel", conversation_id: conversationId }
  )
}
