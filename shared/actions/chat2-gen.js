// @flow
// NOTE: This file is GENERATED from json files in actions/json. Run 'yarn build-actions' to regenerate
/* eslint-disable no-unused-vars,prettier/prettier */

import * as I from 'immutable'
import * as RPCTypes from '../constants/types/rpc-gen'
import * as More from '../constants/types/more'
import * as RPCChatTypes from '../constants/types/rpc-chat-gen'
import * as Types from '../constants/types/chat2'
import HiddenString from '../util/hidden-string'

// Constants
export const resetStore = 'common:resetStore' // not a part of chat2 but is handled by every reducer
export const badgesUpdated = 'chat2:badgesUpdated'
export const clearOrdinals = 'chat2:clearOrdinals'
export const desktopNotification = 'chat2:desktopNotification'
export const inboxRefresh = 'chat2:inboxRefresh'
export const loadMoreMessages = 'chat2:loadMoreMessages'
export const messageDelete = 'chat2:messageDelete'
export const messageEdit = 'chat2:messageEdit'
export const messageSend = 'chat2:messageSend'
export const messageSetEditing = 'chat2:messageSetEditing'
export const messageWasEdited = 'chat2:messageWasEdited'
export const messagesAdd = 'chat2:messagesAdd'
export const messagesWereDeleted = 'chat2:messagesWereDeleted'
export const metaHandleQueue = 'chat2:metaHandleQueue'
export const metaNeedsUpdating = 'chat2:metaNeedsUpdating'
export const metaReceivedError = 'chat2:metaReceivedError'
export const metaRequestTrusted = 'chat2:metaRequestTrusted'
export const metaRequestingTrusted = 'chat2:metaRequestingTrusted'
export const metasReceived = 'chat2:metasReceived'
export const selectConversation = 'chat2:selectConversation'
export const setInboxFilter = 'chat2:setInboxFilter'
export const setLoading = 'chat2:setLoading'
export const setSearching = 'chat2:setSearching'
export const setupChatHandlers = 'chat2:setupChatHandlers'

// Action Creators
export const createBadgesUpdated = (payload: $ReadOnly<{conversations: Array<RPCTypes.BadgeConversationInfo>}>) => ({error: false, payload, type: badgesUpdated})
export const createClearOrdinals = (payload: $ReadOnly<{conversationIDKey: Types.ConversationIDKey}>) => ({error: false, payload, type: clearOrdinals})
export const createDesktopNotification = (
  payload: $ReadOnly<{
    conversationIDKey: Types.ConversationIDKey,
    author: string,
    body: string,
  }>
) => ({error: false, payload, type: desktopNotification})
export const createInboxRefresh = (
  payload: $ReadOnly<{
    reason: string,
    clearAllData?: boolean,
  }>
) => ({error: false, payload, type: inboxRefresh})
export const createLoadMoreMessages = (payload: $ReadOnly<{conversationIDKey: Types.ConversationIDKey}>) => ({error: false, payload, type: loadMoreMessages})
export const createMessageDelete = (
  payload: $ReadOnly<{
    conversationIDKey: Types.ConversationIDKey,
    ordinal: Types.Ordinal,
  }>
) => ({error: false, payload, type: messageDelete})
export const createMessageEdit = (
  payload: $ReadOnly<{
    conversationIDKey: Types.ConversationIDKey,
    ordinal: Types.Ordinal,
    text: HiddenString,
  }>
) => ({error: false, payload, type: messageEdit})
export const createMessageSend = (
  payload: $ReadOnly<{
    conversationIDKey: Types.ConversationIDKey,
    text: HiddenString,
  }>
) => ({error: false, payload, type: messageSend})
export const createMessageSetEditing = (
  payload: $ReadOnly<{
    conversationIDKey: Types.ConversationIDKey,
    ordinal: ?Types.Ordinal,
  }>
) => ({error: false, payload, type: messageSetEditing})
export const createMessageWasEdited = (
  payload: $ReadOnly<{
    conversationIDKey: Types.ConversationIDKey,
    ordinal: Types.Ordinal,
    text: HiddenString,
  }>
) => ({error: false, payload, type: messageWasEdited})
export const createMessagesAdd = (
  payload: $ReadOnly<{
    context: {type: 'sent'} | {type: 'incoming'} | {type: 'threadLoad', conversationIDKey: Types.ConversationIDKey},
    messages: Array<Types.Message>,
  }>
) => ({error: false, payload, type: messagesAdd})
export const createMessagesWereDeleted = (
  payload: $ReadOnly<{
    conversationIDKey: Types.ConversationIDKey,
    ordinals: Array<Types.Ordinal>,
  }>
) => ({error: false, payload, type: messagesWereDeleted})
export const createMetaHandleQueue = () => ({error: false, payload: undefined, type: metaHandleQueue})
export const createMetaNeedsUpdating = (
  payload: $ReadOnly<{
    conversationIDKeys: Array<Types.ConversationIDKey>,
    reason: string,
  }>
) => ({error: false, payload, type: metaNeedsUpdating})
export const createMetaReceivedError = (
  payload: $ReadOnly<{
    conversationIDKey: Types.ConversationIDKey,
    error: ?RPCChatTypes.ConversationErrorLocal,
    username: ?string,
  }>
) => ({error: false, payload, type: metaReceivedError})
export const createMetaRequestTrusted = (
  payload: $ReadOnly<{
    force?: boolean,
    conversationIDKeys: Array<Types.ConversationIDKey>,
  }>
) => ({error: false, payload, type: metaRequestTrusted})
export const createMetaRequestingTrusted = (payload: $ReadOnly<{conversationIDKeys: Array<Types.ConversationIDKey>}>) => ({error: false, payload, type: metaRequestingTrusted})
export const createMetasReceived = (payload: $ReadOnly<{metas: Array<Types.ConversationMeta>}>) => ({error: false, payload, type: metasReceived})
export const createSelectConversation = (
  payload: $ReadOnly<{
    conversationIDKey: Types.ConversationIDKey,
    fromUser?: boolean,
  }>
) => ({error: false, payload, type: selectConversation})
export const createSetInboxFilter = (payload: $ReadOnly<{filter: string}>) => ({error: false, payload, type: setInboxFilter})
export const createSetLoading = (
  payload: $ReadOnly<{
    key: string,
    loading: boolean,
  }>
) => ({error: false, payload, type: setLoading})
export const createSetSearching = (payload: $ReadOnly<{searching: boolean}>) => ({error: false, payload, type: setSearching})
export const createSetupChatHandlers = () => ({error: false, payload: undefined, type: setupChatHandlers})

// Action Payloads
export type BadgesUpdatedPayload = More.ReturnType<typeof createBadgesUpdated>
export type ClearOrdinalsPayload = More.ReturnType<typeof createClearOrdinals>
export type DesktopNotificationPayload = More.ReturnType<typeof createDesktopNotification>
export type InboxRefreshPayload = More.ReturnType<typeof createInboxRefresh>
export type LoadMoreMessagesPayload = More.ReturnType<typeof createLoadMoreMessages>
export type MessageDeletePayload = More.ReturnType<typeof createMessageDelete>
export type MessageEditPayload = More.ReturnType<typeof createMessageEdit>
export type MessageSendPayload = More.ReturnType<typeof createMessageSend>
export type MessageSetEditingPayload = More.ReturnType<typeof createMessageSetEditing>
export type MessageWasEditedPayload = More.ReturnType<typeof createMessageWasEdited>
export type MessagesAddPayload = More.ReturnType<typeof createMessagesAdd>
export type MessagesWereDeletedPayload = More.ReturnType<typeof createMessagesWereDeleted>
export type MetaHandleQueuePayload = More.ReturnType<typeof createMetaHandleQueue>
export type MetaNeedsUpdatingPayload = More.ReturnType<typeof createMetaNeedsUpdating>
export type MetaReceivedErrorPayload = More.ReturnType<typeof createMetaReceivedError>
export type MetaRequestTrustedPayload = More.ReturnType<typeof createMetaRequestTrusted>
export type MetaRequestingTrustedPayload = More.ReturnType<typeof createMetaRequestingTrusted>
export type MetasReceivedPayload = More.ReturnType<typeof createMetasReceived>
export type SelectConversationPayload = More.ReturnType<typeof createSelectConversation>
export type SetInboxFilterPayload = More.ReturnType<typeof createSetInboxFilter>
export type SetLoadingPayload = More.ReturnType<typeof createSetLoading>
export type SetSearchingPayload = More.ReturnType<typeof createSetSearching>
export type SetupChatHandlersPayload = More.ReturnType<typeof createSetupChatHandlers>

// All Actions
// prettier-ignore
export type Actions =
  | More.ReturnType<typeof createBadgesUpdated>
  | More.ReturnType<typeof createClearOrdinals>
  | More.ReturnType<typeof createDesktopNotification>
  | More.ReturnType<typeof createInboxRefresh>
  | More.ReturnType<typeof createLoadMoreMessages>
  | More.ReturnType<typeof createMessageDelete>
  | More.ReturnType<typeof createMessageEdit>
  | More.ReturnType<typeof createMessageSend>
  | More.ReturnType<typeof createMessageSetEditing>
  | More.ReturnType<typeof createMessageWasEdited>
  | More.ReturnType<typeof createMessagesAdd>
  | More.ReturnType<typeof createMessagesWereDeleted>
  | More.ReturnType<typeof createMetaHandleQueue>
  | More.ReturnType<typeof createMetaNeedsUpdating>
  | More.ReturnType<typeof createMetaReceivedError>
  | More.ReturnType<typeof createMetaRequestTrusted>
  | More.ReturnType<typeof createMetaRequestingTrusted>
  | More.ReturnType<typeof createMetasReceived>
  | More.ReturnType<typeof createSelectConversation>
  | More.ReturnType<typeof createSetInboxFilter>
  | More.ReturnType<typeof createSetLoading>
  | More.ReturnType<typeof createSetSearching>
  | More.ReturnType<typeof createSetupChatHandlers>
  | {type: 'common:resetStore', payload: void}
