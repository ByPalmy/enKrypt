import type {
  InjectedProvider,
  ProviderList,
  ProviderMeta,
} from "@polkadot/extension-inject/types";
import type {
  ProviderInterfaceEmitCb,
  ProviderInterfaceEmitted,
} from "@polkadot/rpc-provider/types";
import type { AnyFunction } from "@polkadot/types/types";

import EventEmitter from "eventemitter3";
import { InjectedSendMessageHandler, InjectLibOptions } from "../types";

type CallbackHandler = (error?: null | Error, value?: unknown) => void;

interface SubscriptionHandler {
  callback: CallbackHandler;
  type: string;
}

export default class PostMessageProvider implements InjectedProvider {
  eventEmitter: EventEmitter;
  sendMessageHandler: InjectedSendMessageHandler;
  options: InjectLibOptions;
  constructor(options: InjectLibOptions) {
    this.eventEmitter = new EventEmitter();
    this.sendMessageHandler = options.sendMessageHandler;
    this.options = options;
  }

  public clone(): PostMessageProvider {
    console.error("PostMessageProvider.clone() is not implemented.");
    return new PostMessageProvider(this.options);
  }

  public async connect(): Promise<void> {
    console.error("PostMessageProvider.connect() is not implemented.");
  }
  public async disconnect(): Promise<void> {
    console.error("PostMessageProvider.disconnect() is not implemented.");
  }

  public get hasSubscriptions(): boolean {
    console.error("PostMessageProvider.hassubsriptions() is not implemented.");
    return false;
  }

  public get isConnected(): boolean {
    console.error("PostMessageProvider.isconnected() is not implemented.");
    return true;
  }

  public listProviders(): Promise<ProviderList> {
    console.error("PostMessageProvider.listProviders() is not implemented.");
    return Promise.resolve({});
  }

  public async send(
    method: string,
    params: unknown[],
    _?: boolean,
    subscription?: SubscriptionHandler
  ): Promise<any> {
    console.error(
      method,
      params,
      "PostMessageProvider.send() is not implemented."
    );
  }

  public async startProvider(key: string): Promise<ProviderMeta> {
    console.error(
      key,
      "PostMessageProvider.startprovider() is not implemented."
    );
    return { network: "", node: "full", source: "", transport: "" };
  }

  on(type: ProviderInterfaceEmitted, sub: ProviderInterfaceEmitCb): () => void {
    console.error("PostMessageProvider.on() is not implemented.");
    this.eventEmitter.on(type, sub);
    return (): void => {
      // FIXME we need the ability to unsubscribe
    };
  }
  public subscribe(
    type: string,
    method: string,
    params: unknown[],
    callback: AnyFunction
  ): Promise<number> {
    console.error(
      type,
      method,
      params,
      "PostMessageProvider.subscribe() is not implemented."
    );
    return this.send(method, params, false, {
      callback,
      type,
    }) as Promise<number>;
  }

  public async unsubscribe(
    type: string,
    method: string,
    id: number
  ): Promise<boolean> {
    console.error("PostMessageProvider.unsubscribe() is not implemented.");
    return true;
  }
}
