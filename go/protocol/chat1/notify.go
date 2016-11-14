// Auto-generated by avdl-compiler v1.3.9 (https://github.com/keybase/node-avdl-compiler)
//   Input file: avdl/chat1/notify.avdl

package chat1

import (
	"errors"
	keybase1 "github.com/keybase/client/go/protocol/keybase1"
	"github.com/keybase/go-framed-msgpack-rpc/rpc"
	context "golang.org/x/net/context"
)

type ChatActivityType int

const (
	ChatActivityType_RESERVED         ChatActivityType = 0
	ChatActivityType_INCOMING_MESSAGE ChatActivityType = 1
)

var ChatActivityTypeMap = map[string]ChatActivityType{
	"RESERVED":         0,
	"INCOMING_MESSAGE": 1,
}

var ChatActivityTypeRevMap = map[ChatActivityType]string{
	0: "RESERVED",
	1: "INCOMING_MESSAGE",
}

type IncomingMessage struct {
	Message MessageUnboxed `codec:"message" json:"message"`
	ConvID  ConversationID `codec:"convID" json:"convID"`
}

type ChatActivity struct {
	ActivityType__    ChatActivityType `codec:"activityType" json:"activityType"`
	IncomingMessage__ *IncomingMessage `codec:"incomingMessage,omitempty" json:"incomingMessage,omitempty"`
}

func (o *ChatActivity) ActivityType() (ret ChatActivityType, err error) {
	switch o.ActivityType__ {
	case ChatActivityType_INCOMING_MESSAGE:
		if o.IncomingMessage__ == nil {
			err = errors.New("unexpected nil value for IncomingMessage__")
			return ret, err
		}
	}
	return o.ActivityType__, nil
}

func (o ChatActivity) IncomingMessage() IncomingMessage {
	if o.ActivityType__ != ChatActivityType_INCOMING_MESSAGE {
		panic("wrong case accessed")
	}
	if o.IncomingMessage__ == nil {
		return IncomingMessage{}
	}
	return *o.IncomingMessage__
}

func NewChatActivityWithIncomingMessage(v IncomingMessage) ChatActivity {
	return ChatActivity{
		ActivityType__:    ChatActivityType_INCOMING_MESSAGE,
		IncomingMessage__: &v,
	}
}

type NewChatActivityArg struct {
	Uid      keybase1.UID `codec:"uid" json:"uid"`
	Activity ChatActivity `codec:"activity" json:"activity"`
}

type NotifyChatInterface interface {
	NewChatActivity(context.Context, NewChatActivityArg) error
}

func NotifyChatProtocol(i NotifyChatInterface) rpc.Protocol {
	return rpc.Protocol{
		Name: "chat.1.NotifyChat",
		Methods: map[string]rpc.ServeHandlerDescription{
			"NewChatActivity": {
				MakeArg: func() interface{} {
					ret := make([]NewChatActivityArg, 1)
					return &ret
				},
				Handler: func(ctx context.Context, args interface{}) (ret interface{}, err error) {
					typedArgs, ok := args.(*[]NewChatActivityArg)
					if !ok {
						err = rpc.NewTypeError((*[]NewChatActivityArg)(nil), args)
						return
					}
					err = i.NewChatActivity(ctx, (*typedArgs)[0])
					return
				},
				MethodType: rpc.MethodNotify,
			},
		},
	}
}

type NotifyChatClient struct {
	Cli rpc.GenericClient
}

func (c NotifyChatClient) NewChatActivity(ctx context.Context, __arg NewChatActivityArg) (err error) {
	err = c.Cli.Notify(ctx, "chat.1.NotifyChat.NewChatActivity", []interface{}{__arg})
	return
}
