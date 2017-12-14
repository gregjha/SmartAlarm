//
//  AlarmTableViewController.swift
//  World Clock
//
//  Created by Shi Zhang on 11/17/17.
//  Copyright © 2017 Shi Zhang. All rights reserved.
//

import UIKit
import UserNotifications

class AlarmTableViewController: UITableViewController, AddAlarmProtocol, UpdateSwitchValueProtocol {

    var alarms = [alarmObject]()
    
    
    func addAlarm(alarmTime: Date, switchValue: Bool) {
        let newAlarm = alarmObject(alarmTime: alarmTime, alarmActive: switchValue)
        alarms.append(newAlarm)
        tableView.reloadData()
        
        // Register New Notification Here
        registerNewNotification(time: alarmTime)
    }
    
    func updateAlarm(alarmTime: Date, switchValue: Bool, index: Int) {
        let existingAlarm = alarmObject(alarmTime: alarmTime, alarmActive: switchValue)
        alarms[index] = existingAlarm
        tableView.reloadData()
    }
    
    func updateAlarmSwitch(at: Int, value: Bool) {
        
        let updateObject: alarmObject = alarmObject(alarmTime: alarms[at].alarmTime, alarmActive: value)
        alarms[at] = updateObject
        
    }
    
    
    func registerNewNotification(time: Date) {
        
        let content = UNMutableNotificationContent()
        content.title = "Alarm"
        content.subtitle = "Time Notification"
        content.body = "It is time to solve the questions!"
        content.sound = UNNotificationSound(named: "alarm.aiff")
        
        var interval = time.timeIntervalSinceNow
        if interval < 0 {
            let tomorrow = time.addingTimeInterval(24*60*60)
            interval = tomorrow.timeIntervalSinceNow
        }
        
        for i in 0...64 {
            let trigger = UNTimeIntervalNotificationTrigger(timeInterval: TimeInterval(interval + Double(i * 30)), repeats: false)
            
            let requestIdentifier = "sampleRequest" + String(i)
            let request = UNNotificationRequest(identifier: requestIdentifier, content: content, trigger: trigger)
            
            UNUserNotificationCenter.current().add(request, withCompletionHandler: nil)
        }
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()

        self.navigationItem.leftBarButtonItem = self.editButtonItem
    }

    // MARK: - Table view data source

    override func numberOfSections(in tableView: UITableView) -> Int {
        
        return 1
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return alarms.count
    }

    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath) as! AddAlarmTableViewCell

        // Configure the cell...
        
        let formatter = DateFormatter()
        formatter.timeStyle = .short
        
        let alarmTime = alarms[indexPath.row].alarmTime
        let timeString = formatter.string(from: alarmTime)
        
        cell.alarmLabel.text = timeString
        
        cell.alarmSwitch.isOn = alarms[indexPath.row].alarmActive

        cell.cellIndex = indexPath.row
        cell.delegate = self
        
        return cell
    }
    

    
    // Override to support conditional editing of the table view.
    override func tableView(_ tableView: UITableView, canEditRowAt indexPath: IndexPath) -> Bool {
        // Return false if you do not want the specified item to be editable.
        return true
    }
    

    
    // Override to support editing the table view.
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        if editingStyle == .delete {
            alarms.remove(at: indexPath.row)
            tableView.deleteRows(at: [indexPath], with: .fade)
        }
    }
    

    /*
    // Override to support rearranging the table view.
    override func tableView(_ tableView: UITableView, moveRowAt fromIndexPath: IndexPath, to: IndexPath) {

    }
    */

    /*
    // Override to support conditional rearranging of the table view.
    override func tableView(_ tableView: UITableView, canMoveRowAt indexPath: IndexPath) -> Bool {
        // Return false if you do not want the item to be re-orderable.
        return true
    }
    */

    
    // MARK: - Navigation

    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        
        if (segue.identifier == "questions_segue") {
            return
        }
        
        let dvc = segue.destination as! AddAlarmViewController
        dvc.delegate = self
        
        if segue.identifier == "addSegue" {
            
            dvc.addNew = true
            
        } else if segue.identifier == "editSegue" {
            
            dvc.addNew = false
            
            let index = (tableView.indexPathForSelectedRow?.row)!
            let existingAlarm = alarms[index]
            
            dvc.existingAlarm = existingAlarm
            dvc.updateIndex = index
        }
        
        
        
        
        
        
    }
    

}
