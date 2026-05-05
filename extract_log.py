import json
import os

log_path = r'C:\Users\csean\.gemini\antigravity\brain\c3c805e7-fc62-4a8d-ab84-7247f57b1929\.system_generated\logs\overview.txt'

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get('step_index') == 241:
                print(json.dumps(data, indent=2))
                break
        except:
            continue
