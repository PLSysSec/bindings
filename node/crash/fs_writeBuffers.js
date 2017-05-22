// can escalate to public api via fs.createWriteStream and Array poisoning
process.binding('fs').writeBuffers()
