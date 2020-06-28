import {
  RequestSigner,
  HttpRequest as IHttpRequest,
  RequestSigningArguments,
  RequestPresigner,
  RequestPresigningArguments
} from "../types/mod.ts";
import { SignatureV4 as BaseSignatureV4 } from "../signature-v4/mod.ts";
import { HttpRequest } from "../protocol-http/mod.ts";

export class SignatureV4 implements RequestSigner, RequestPresigner {
  private readonly signer: BaseSignatureV4;
  constructor(options: { signer: BaseSignatureV4 }) {
    this.signer = options.signer;
  }

  public presign(
    originalRequest: IHttpRequest,
    options: RequestPresigningArguments = {}
  ): Promise<IHttpRequest> {
    return this.signer.presign(originalRequest, options);
  }

  public async sign(
    toSign: IHttpRequest,
    options?: RequestSigningArguments
  ): Promise<IHttpRequest> {
    if (HttpRequest.isInstance(toSign)) {
      // Presign the endpoint url with empty body, otherwise
      // the payload hash would be UNSINGED_PAYLOAD
      const signedRequest = await this.signer.presign({ ...toSign, body: "" }, {
        expiresIn: 5 * 60 // presigned url must be expired within 5 mins
      } as any);
      return {
        ...signedRequest,
        body: toSign.body
      };
    } else {
      return this.signer.sign(toSign, options);
    }
  }
}
