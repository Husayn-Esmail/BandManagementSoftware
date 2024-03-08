
#!/bin/bash


curl -H 'Content-Type: application/json' -d '{"interval": 6}' -X PUT http://localhost:8080/api/chords/2
