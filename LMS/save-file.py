import json

def writeToJSONFile(path, fileName, data):
    filePathNameWExt = './' + path + '/' + fileName + '.json'
    with open(filePathNameWExt, 'w') as fp:
        json.dump(data, fp)
path='./'
fileName="data1.json"

# Example
data = {}
data['key'] = 'value'
data['hello'] = 'world'

writeToJSONFile('./','file-name',data)