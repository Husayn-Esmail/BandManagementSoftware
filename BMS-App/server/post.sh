#!/bin/bash


curl -H 'Content-Type: application/json' -d '{"note":"B", "interval": 2 }' -X POST http://localhost:8080/api/chords
