//
//  WorldClockTableViewCell.swift
//  World Clock
//
//  Created by Shi Zhang on 11/17/17.
//  Copyright © 2017 Shi Zhang. All rights reserved.
//

import UIKit

class WorldClockTableViewCell: UITableViewCell {

    @IBOutlet var timeZoneName: UILabel!
    @IBOutlet var timeLabel: UILabel!
    
    
    
    override func awakeFromNib() {
        super.awakeFromNib()
        
        let timer = Timer.scheduledTimer(timeInterval: 1.0, target: self, selector: #selector(setTime), userInfo: nil, repeats: true)
        
        RunLoop.current.add(timer, forMode: RunLoopMode.commonModes)
    }
    
    
    func setTime() {
        timeLabel.text = getTime()
    }
    
    func getTime() -> String {
        
        var timeString = ""
        
        if timeZoneName.text != "" {
            
            let formatter = DateFormatter()
            formatter.timeStyle = .long
            formatter.timeZone = TimeZone(identifier: timeZoneName.text!)
            
            let timeNow = Date()
            timeString = formatter.string(from: timeNow)
            
            
        }
        
        return timeString
    }
    
    
    

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
