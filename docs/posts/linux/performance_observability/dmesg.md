# DEMSG

## Name

dmesg - print or control the kernel ring buffer

## Description

**dmesg** is used to examine or control the kernel ring buffer.
The default action it to display all messages from the kernel ring buffer.

## Usage

1. -C
   
    Clear the ring buffer.

2. -c
   
    CLear the ring buffer after printing its contents.

3. -D
    
    Disable the printing of messages to the console.

4. -d
    
    Display the timestamp and the time delta spent between messages. 

5. -E

    Enable print messages to the console.

6. -e

    Display the local time and delta in human-readable format.

7. -F *file*

    Read the syslog messages from *file*. Only support old syslog format. Don't support **kmsg** format.

8. -f *list*

    Restrict output to the given list of facilities. `dmsg --facility=daemon` will print messages from system daemons only. Supported facilities see **--help** output.

9. -H

    Enable human-readable output.

10. -J

    Use Json output format.
    
11. -k

    Print kernel messages.

12. -L[=when]
    
    Colorize the output. Argument *when* can be **auto**, **never** or **always**. If *when* is omitted, it defaults to **auto**.

13. -l *level*
    
    Restrict output to the given list of **levels**. See **--help** for all supported **levels**.

14. -n *level*
    
    Set the *level* at which printing of messages is done to the console. See **--help** for all supported **levels**.

15. --noescape

    The unprintable and potentially unsafe characters are escaped in format \x<hex> for security reason by default. This option disables this feature. It's usable for debugging purepose together with --raw.

16. -P

    Do not pipe output into a pager.

17. -p
    
    Add facility, level or timestamp info to each line of a multi-line message.

18. -r
    
    Print the raw message buffer.

19. -S
    
    For dmesg to use **syslog** kernel interface to read kernel messages. Ths default is to use **/dev/kmsg** rather than **syslog** since kernel 3.5.0.

20. -s *size*

    Use a buffer of size to query the kernel ring buffer. **16392** by default.

21. -T

    Print human-readable timestamps.

22. --since/ --until *time*

    Display record until the specified time.

23. -t

    Do not print kernel's timestamp.

24. --time-format *format*
    
    Print timestamps using the given *format*.

25. -u
    
    Print userspace messages.

26. -w

    Wait for new messages.

27. -W
    
    Wait and print only new messages.

28. -x

    Decode facility and level numbers to human-readable prefixes.
