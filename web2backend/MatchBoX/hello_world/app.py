import json
import urllib.request
base_path = "https://www.googleapis.com/"

def lambda_handler(event, context):
    req_url = base_path+event["pathParameters"]["proxy"]
    req_headers = event["headers"]
    req_body = event["body"]
    if event["body"] != None:
        req = urllib.request.Request(req_url, json.dumps(req_body).encode(), headers=req_headers, method=event["requestContext"]["httpMethod"])
    else:
        req = urllib.request.Request(req_url)
    body=""
    headers=""
    code=200
    with urllib.request.urlopen(req) as res:
        body = json.load(res)
        headers = dict(res.getheaders())
        code = res.getcode()
    response = {
            'statusCode': code,
            'body': body
    }
    #Content-LengthとTransfer-Encodingが共存することになりエラーになったため、コメントアウト...
    #response["headers"] = headers
    return response