# VMSTAT

## Name

vmstat - Repostr virtual memory statistics.

## Synopsis

vmstat [options] [delay [count]]

## Description

vmstat report information about **processes**, **memory**, **paging**, **block IO**, **traps**, **disks** and **cpu activity**.

The first report produced gives averages since the last reboot. Additional reports give information on a sampling period of length delay. The process and memory reports are instantaneous in either case.

## Options
1. -a

    Display active and inactive memory.

2. -f

    Switch displays the number of forks since boot. This includes the **fork**, **vfork**, **clion** syscalls, and is equivaltent to the total number of tasks created. Each process is represented by one or more tasks, depending on thread usage. This display does not repeat.

3. -m

    Display slab info.

4. -n
   
    Display the header only once rather than periodically.

5. -s

    Displays a table of various event counters and memory statistics. This display does not repeat.

6. -d

    Report disk statistics.

7. -D

    Report some summary statistics about disk activity.

8. -p *device*

    Detailed statistics about partition.

9. -S *character*

    Switches outputs between 1000(k), 1024(K), 1000 000(m), or 1024*1024(M) bytes.

10. -t

    Append timestamp to each line.

11. -w

    Wide output mode.

## Field Description for VM Mode

1. Procs

    r: The number of runnable processes (running or waiting for run time).

    b: The number of processes blocked waiting for I/O to complete.

2. Memory

    These are affected by the --unit option.

    swpd: the amount of swap memory used.

    free: the amount of idle memory.

    buff: the amount of memory used as buffers.

    cache: the amount of memory used as cache.

    inact: the amount of inactive memory.  (-a option)

    active: the amount of active memory.  (-a option)

3. Swap
    
    These are affected by the --unit option.
    
    si: Amount of memory swapped in from disk (/s).
    
    so: Amount of memory swapped to disk (/s).

4. IO
    
    bi: Blocks received from a block device (blocks/s).
    
    bo: Blocks sent to a block device (blocks/s).

5. System
    
    in: The number of interrupts per second, including the clock.
    
    cs: The number of context switches per second.

6. CPU
    
    These are percentages of total CPU time.
    
    us: Time spent running non-kernel code.  (user time, including nice time)
    
    sy: Time spent running kernel code.  (system time)
    
    id: Time spent idle.  Prior to Linux 2.5.41, this includes IO-wait time.
    
    wa: Time spent waiting for IO.  Prior to Linux 2.5.41, included in idle.
    
    st: Time stolen from a virtual machine.  Prior to Linux 2.6.11, unknown.

## Field Description for Disk Mode

1. Reads
    
    total: Total reads completed successfully
    
    merged: grouped reads (resulting in one I/O)
    
    sectors: Sectors read successfully
    
    ms: milliseconds spent reading

2. Writes
    
    total: Total writes completed successfully
    
    merged: grouped writes (resulting in one I/O)
    
    sectors: Sectors written successfully
    
    ms: milliseconds spent writing

3. IO
    
    cur: I/O in progress
    
    s: seconds spent for I/O

## Field Description for Disk Partition Mode
       
   reads: Total number of reads issued to this partition
   
   read sectors: Total read sectors for partition
   
   writes : Total number of writes issued to this partition
   
   requested writes: Total number of write requests made for partition

## Field Descriptionn for Slab Mode
       
   cache: Cache name
   
   num: Number of currently active objects
   
   total: Total number of available objects
   
   size: Size of each object
   
   pages: Number of pages with at least one active object
