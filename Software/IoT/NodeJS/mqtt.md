# ESP

/discover
    - sub by esps
    - pub by control logic to discover all connected esps

/<id>/assignment
    - sub by esps
    - pub by control logic to pass assignment to esp

/<id>/assignment-result
    - sub by esps
    - pub by control logic to display assignment result

/cancel
    - sub by esps
    - pub by control logic or base station to cancel any ongoing assignment

# Control logic

/init
    - sub by control logic
    - pub by base station to pass game parameters and start the game
        - base station will pass the game parameters in the payload

/announce
    - sub by control logic
    - pub by esps to announce presence after receiving on /discover
        - esp will pass their unique ID in the payload

/assignment-request
    - sub by control logic
    - pub by base station to request an assignment

/assignment-answer
    - sub by control logic
    - pub by esps to pass assignment answer chosen by player

/cancel
    - sub by control logic
    - pub by control logic or base station to cancel the game

# Base station

/assignment-announcement
    - sub by base station
    - pub by control logic to send a player to a designated ESP

/*/assignment-result
    - sub by base station
    - pub by control logic to display assignment result

/cancel
    - sub by base station
    - pub by control logic or base station to reset UI
