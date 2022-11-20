# TOP
## Name
top - display Linux processes

## Description
提供运行中的系统的动态实时观测，可以展示 **system** 的概述信息，列出 **process** or **threads** 的相关信息。

## Linux Memory Types
1. **physical memory**, a limited resource where code and data must reside when executed or referenced.
2. **swap file**, where dirty memory can be saved and later retrieved if too many demands are made on **physical memory**.
3. **virtual memory**, a nearly unlimited resource serving the following goals: *abstraction*, *isolation*, *sharing*, *flexibility*.

All types of memory are managed as pages, typically **4096** bytes. Each memory page is restricted to a single quadrant from the table below.


```
                    Private     |     Shared            
                    1           |    2                  
Anonymous   stack               |                       
            mallock()           |                       
            brk()/sbrk()        |  POSIX shm*           
            mmap(PRIVATE, ANON) |  mmap(SHARED, ANON)   
--------------------------------+-----------------------
            mmap(PRIVATE, fd)   |  mmap(SHARED, fd)     
            pgms/shared libs    |                       
File-backed                     |                       
                    3           |    4                  
```

| Memory Type     | Page Type      |
| --------------- | -------------- |
| physical memory | #1, #2, #3, #4 |
| swap file       | #1, #2, #3     |
| virtual memory  | #1, #2, #3, #4 |

- *The memory in quadrant #4,  when  modified, acts as its own dedicated swap file. -- man page*

### top process level memory columns classify

| Name | Description                                                  |
| ---- | ------------------------------------------------------------ |
| %MEM | RES / total physical memory                                  |
| CODE | the 'pgms' portion of #3                                     |
| DATA | the entire #1 portion of VIRT + mmap file-backed pages of #3 |
| RES  | anything occupying physical memory. RSan + RSfd + RSsh       |
| RSan | #1 pages, which include any former #3 pages if modified      |
| RSfd | #3 + #4 pages                                                |
| RSsh | #2 pages                                                     |
| RSlk | subset of RES which cannot be swapped out. could be any quadrant |
| SHR  | subset of RES, excludes #1, includes #2, #4, some of #3      |
| SWAP | potentially any quadrant except #4                           |
| USED | RES + SWAP                                                   |
| VIRT | everything in-use and reserved (all quadrants)               |

- Program images and shared libraries are considered **private** to a process. But they will be accounted for **shared**(SHR) by the kernel.





## Summary Display

``` linenums="1"
top - 19:24:58 up 1 day,  4:50,  2 users,  load average: 0.66, 0.57, 0.56
Tasks: 233 total,   2 running, 231 sleeping,   0 stopped,   0 zombie
%Cpu(s):  0.5 us,  0.5 sy,  0.0 ni, 98.7 id,  0.0 wa,  0.2 hi,  0.1 si,  0.0 st
MiB Mem :   7693.3 total,    476.8 free,   1841.9 used,   5374.5 buff/cache
MiB Swap:   9011.2 total,   8313.9 free,    697.3 used.   4673.2 avail Mem
```

**Above Information Illustration**

**line 1**

```
{program/window name} - {current time} up {length of time since last boot}, {total number of user} users, load average: {load avg over 1, 5, 15 mins}
```

**line 2**

``` 
Tasks: {total tasks/threads} {total is classified as running; sleeping; stopped; zombie}
```

**line 3**

| Name        | Description                                |
| ----------- | ------------------------------------------ |
| us, user    | time running un-niced user processes       |
| sy, system  | time running kernel process                |
| ni, nice    | time running niced user processes          |
| id, idle    | time spent in the kernel idle handler      |
| wa, IO-wait | time waiting for I/O completion            |
| hi          | time spent servicing hardware interrupts   |
| si          | time spent servicing software interrupts   |
| st          | time stolen from this vm by the hypervisor |

**line 4 & line 5**

line 4 reflects **physical memory**, while line 5 reflects **virtual memory**.

**avail** on line 5 is an estimation of physical memory available for starting new applications, without swapping. It attempts to account for readily reclaimable page cache and memory slabs



## Fields / Columns

### Description of Fields

1. **%CPU -- CPU Usage**

    If top is not operating in **Threads mode**, some processes' may amount > 100%.

2. **%MEM -- Memory Usage (RES)**

    A task's currently resident share of available physical memory.

3. **CGNAME -- Control Group Name**

4. **CGROUP -- Control Groups**

5. **CODE -- Code Size (KiB) / TRS -- Text Resident Set**

    Amount of physical memory currently devoted to executable code.

6. **COMMAND -- Command Name or Command Line**

7. **DATA -- Data + Stack Size (KiB) / DRS -- Data Resident Set**

    Amount of private memory reserved by a process. Such memory may not yet be mapped to physical memory (RES), but will always be included in the VIRT amount.

8. **ENVIRON -- Environment variables**

9. **Flags -- Task Flags**

    Represents the task's current scheduling flags, which are officially documented in <linux/sched.h>

11. **GID/GROUP -- Group Name**

12. **LXC -- Lxc Container Name**

13. **NI -- Nice Value**

14. **NU -- last known NUMA node**

    A number representing the NUMA node associated with the last used processor. -1 stands for NUMA info is not available.

15. **OOMa -- Out of Memory Adjustment Factor**

    [-1000, +1000]. Added to OOMs.

16. **OOMs -- Out of Memory Score**

    [0, +1000]. 0 stands for "never kill", whereas +1000 means "always kill".

17. **P -- Last used CPU**

18. **PGRP -- Process Group Id**

19. **PID -- Process Id**

20. **PPID -- Parent Process Id**

21. **PR -- Priority**

22. **RES -- Resident Memory Size (KiB)**

    A subset of the VIRT,  representing the non-swapped physical memory a task is currently using.

23. **RSan -- Resident Anonymous Memory Size (KiB)**

24. **RSfd -- Resident File-Backed Memory Size (KiB)**

25. **RSlk -- Resident Locked Memory Size (KiB)**

26. **RSsh -- Resident Shared Memory Size (KiB)**

27. **RUID -- Real User Id**

28. **RUSER -- Real User Name**

29. **S -- Process Status**

    | Name | Stands for                       |
    | ---- | -------------------------------- |
    | D    | uninterruptible sleep            |
    | I    | idle                             |
    | R    | running                          |
    | S    | sleeping                         |
    | T    | stopped by job control signal    |
    | t    | stopped by debugger during trace |
    | Z    | zombie                           |

30. **SHR -- Shared Memory Size (KiB)**

    A subset of RES that may be used by other processes. It includes **shared anonymous pages**, **shared file-backed pages** and **private pages mapped to file ** representing program images and shared libraries.

31. **SID -- Session Id**

32. **SUID -- Save User Id**

33. **SUPGRPS -- Supplementary Group Names**

    The names of any supplementary group(s) established at login or inherited from a task's parent.

34. **SUSER -- Saved User Name**

35. **SWAP -- Swapped Size (KiB)**

36. **TGID -- Thread Gourp Id**

37. **TIME -- CPU Time**

    Total CPU time the task has used since it started.

38. **TIME+ -- CPU Time, hundredths**

    The same as **TIME**, but reflecting more granularity though hundredths of a second.

39. **TPGID -- Tty Process Group Id**

40. **TTY -- Controlling Tty**

41. **UID -- User Id**

42. **USED -- Memory in Use (KiB)**

    **None-swapped physical memory** as task is using (RES) + swapped out porttion of its address space (SWAP).

43. **USER -- Effective User Name**

44. **VIRT --Virtual Memory Size (KiB)**

    Total amount of virtual memory used by the task. It includes all **code**, **data** and **shared libraries**, plus pages that have been **swapped out** and pages that have been **mapped but not used**. 

45. **WCHAN -- Sleeping in Function**

    Show the name of the kernel function in which the task is currently sleeping.

46. **nDRT -- Dirty Pages Count** (Deprecated since Linux 2.6)

    The number of pages that have been modified since they were last written to auxiliary storage.

47. **nMaj -- Major Page Fault Count**

    A major page fault is when auxiliary storage access is involved in making that page available.

48. **nMin -- Minor Page Fault count**

    A minor page fault does not involve auxiliary storage access in making that page available.

49. **nTH -- Number of Threads**

50. **nsIPC -- IPC namespace**

51. **nsMNT -- MNT namespace**

52. **nsNET -- NET namespace**

53. **nsPID -- PID namespace**

54. **nsUSER -- USER namespace**

55. **nsUTS -- UTS namespace**

56. **vMj -- Major Page Fault Count Delta**

57. **vMn -- Minor Page Fault Count Delta**


todo...